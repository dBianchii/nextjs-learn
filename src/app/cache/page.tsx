import React from "react";
import { cache } from "react";

const getRandomNumberCached = cache(() => {
  return Math.random();
});

const getRandomNumber = () => {
  return Math.random();
}

export default async function CacheTest() {
  return (
    <div className="flex flex-col items-center justify-center">
      <CachedNumber />
      <CachedNumber />
      {React.createElement("p", "text-blue-400", "This is a cached number")}
      <CachedNumber />
      <CachedNumber />
      <CachedNumber />
      <CachedNumber />
      <br/>
      <UncachedNumber />
      <UncachedNumber />
      <UncachedNumber />
      <UncachedNumber />
      <UncachedNumber />
      <UncachedNumber />
    </div>

  )
}

async function CachedNumber() {
  const randomNumber = getRandomNumberCached();
  return (
    <p className="text-blue-400">
      {randomNumber}
    </p>  
  )
}

async function UncachedNumber() {
  const randomNumber = getRandomNumber();
  return (
    <p className="text-red-400">
      {randomNumber}
    </p>  
  )
}