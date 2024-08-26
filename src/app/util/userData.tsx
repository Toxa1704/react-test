'use client'
import "@/data.json"
import { useEffect, useState } from "react"

interface Person {
  name:string,
  country:string,
  department:string,
  status:string
}
const userData = fetch('data.json')
export default userData;