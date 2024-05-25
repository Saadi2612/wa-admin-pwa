"use client";

import { Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const VideoFrameCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [webSocket, setWebSocket] = useState(null);

  const serverUrl = "ws://127.0.0.1:8000/ws/";

  console.log(webSocket);

  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket(serverUrl);
    ws.onopen = (msg) => {
      console.log(msg);
    };
    ws.onerror = (error) => console.error("WebSocket error:", error);
    ws.onclose = (msg) => console.log(msg);

    setWebSocket(ws);

    // Access user's webcam
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => console.error("Error accessing the camera:", error));

    return () => {
      ws.close();
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [serverUrl]);

  // useEffect(() => {
  //   // Access user's webcam
  //   console.log("coming here...");
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true })
  //     .then((stream) => {
  //       const video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();

  //       // Setup to capture frames after video starts playing
  //       video.onplay = () => {
  //         console.log("capturing...");
  //         captureFrames(0);
  //       };
  //     })
  //     .catch((error) => console.error("Error accessing the camera:", error));

  //   return () => {
  //     if (videoRef.current && videoRef.current.srcObject) {
  //       videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
  //     }
  //   };
  // }, []);

  const captureFrames = (count = 0) => {
    // if (count >= 3) {
    //   webSocket.send(JSON.stringify({ message: "END" }));
    //   return;
    // }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    setInterval(() => {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL = canvas.toDataURL("image/jpeg");
      const base64Data = dataURL.split(",")[1];
      webSocket.send(JSON.stringify({ frame: base64Data }));
    }, 100); // Adjust interval as needed

    // setTimeout(() => captureFrames(count + 1), 1500);
  };
  // const captureFrames = (count = 0) => {
  //   if (count >= 3) {
  //     webSocket.send(JSON.stringify({ message: "END" }));
  //     return;
  //   }

  //   const video = videoRef.current;
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");
  //   context.drawImage(video, 0, 0, canvas.width, canvas.height);

  //   canvas.toBlob((blob) => {
  //     if (webSocket && webSocket.readyState === WebSocket.OPEN) {
  //       webSocket.send(blob);
  //       console.log(`Frame ${count + 1} sent`);
  //     } else {
  //       console.log("WebSocket not ready or disconnected.");
  //     }
  //   }, "image/jpeg");

  //   setTimeout(() => captureFrames(count + 1), 1500);
  // };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 w-full h-screen p-4 gap-4">
      <div className="flex ">
        <video
          ref={videoRef}
          className="video-element"
          width={640}
          height={480}
        />
        <canvas
          ref={canvasRef}
          width="640"
          height="480"
          // style={{ display: "none" }}
          className="bg-gray-200"
        />
      </div>

      <Button size={"md"} colorScheme="blue" onClick={() => captureFrames()}>
        Start Capturing Frames
      </Button>
    </div>
  );
};

export default VideoFrameCapture;
