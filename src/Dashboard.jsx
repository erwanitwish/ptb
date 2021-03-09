import React, { useState, useEffect } from "react";
import AwesomeList from "./AwesomeList";
import Liste from "./Liste";

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <AwesomeList />
      <Liste />
    </div>
  );
}
