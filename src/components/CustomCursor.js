import { useEffect } from "react";
import cursorImg from "../Assets/cursor.png"; // adjust path if needed

export default function CustomCursor() {
  useEffect(() => {
  const cursor = document.querySelector(".cursor-img");
  const follower = document.querySelector(".cursor-follower");

  if (!cursor || !follower) return;

  let mouseX = 0,
    mouseY = 0;
  let posX = 0,
    posY = 0;

  const showCursor = () => {
    cursor.style.opacity = "1";
    follower.style.opacity = "1";
  };

  const hideCursor = () => {
    cursor.style.opacity = "0";
    follower.style.opacity = "0";
  };

  const mouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

    showCursor();
  };

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseenter", showCursor);
  document.addEventListener("mouseleave", hideCursor);

  const animate = () => {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;

    follower.style.left = posX + "px";
    follower.style.top = posY + "px";

    requestAnimationFrame(animate);
  };

  animate();

  return () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseenter", showCursor);
    document.removeEventListener("mouseleave", hideCursor);
  };
}, []);



  return (
    <>
      <img src={cursorImg} alt="cursor" className="cursor-img" />
      <div className="cursor-follower"></div>
    </>
  );
}
