import type { JSX } from "react";

export interface IDrop {
  left: number;
  delay: number;
  duration: number;
}

export interface IData {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface IFAQData {
  q: string;
  a: string;
}

export interface ISteps {
  step: string;
  title: string;
  desc: string;
}

export interface IPlants{
  value: string;
  label: string;
}