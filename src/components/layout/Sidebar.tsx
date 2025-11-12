"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <nav className="fixed top-6 right-6 z-50">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          onClick={() => setOpen(!open)}
          className="relative w-12 h-12 flex flex-col justify-center items-center rounded-full shadow-lg"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <span
            className={`absolute w-5 h-0.5 transition-transform duration-300 ease-in-out ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
            style={{ backgroundColor: "#ffffff" }}
          />
          <span
            className={`absolute w-5 h-0.5 transition-opacity duration-200 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundColor: "#ffffff" }}
          />
          <span
            className={`absolute w-5 h-0.5 transition-transform duration-300 ease-in-out ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
            style={{ backgroundColor: "#ffffff" }}
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <div
              className="animate-fadeIn"
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "1rem",
                padding: "1.75rem 2rem",
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                width: "280px",
                animation: "fadeIn 0.4s ease-out",
              }}
            >
              {/* Links principales */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {[
                  { id: "about", label: "Sobre mí" },
                  { id: "experience", label: "Experiencia Profesional" },
                  { id: "projects", label: "Proyectos" },
                  { id: "contact", label: "Contacto" },
                ].map((item) => (
                  <DropdownMenu.Item asChild key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="text-base"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        transition: "text-decoration 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      {item.label}
                    </a>
                  </DropdownMenu.Item>
                ))}
              </div>

              {/* Divider visual */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: "#333",
                  margin: "1.75rem 0",
                }}
              />

              {/* Social links */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1.5rem",
                }}
              >
                <a
                  href="https://github.com/huilendev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/huilenvilches/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  );
}
