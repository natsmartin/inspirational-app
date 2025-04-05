import React from "react";
import Task from "@features/todos/Task";
import TaskEntries from "@components/TaskEntries";
import Weather from "@features/weather/Weather";
import Background from "@features/background/Background";
import Quote from "@features/quote/Quote"

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex flex-col">
        <Weather />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Task />
        <TaskEntries />
        <Background />
        <Quote />
      </div>
    </div>
  );
}
