"use client";
export default function Button({ children }) {
  return (
    <button className="primary" onClick={() => console.log("clicked")}>
      {children}
    </button>
  );
}
