'use client'
import fetchData from "../dataUsers";

export default function test() {
 fetchData()
  return (
    <div>
      <h1>Data from JSON file</h1>
      <ul id="user-list"></ul>
    </div>
  );
}

