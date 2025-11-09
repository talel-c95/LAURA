"use client";

import { useEffect, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FiSearch, FiX } from "react-icons/fi";

interface InlineSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InlineSearch({ isOpen, onClose }: InlineSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest(".inline-search-expanded")) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("s") as string;
    if (query && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div
      className={`inline-search-expanded ${isOpen ? "is-open" : ""}`}
      style={{
        position: "absolute",
        top: "100%",
        right: 0,
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        zIndex: 1001,
        padding: "15px 20px",
        minWidth: "400px",
        transform: isOpen ? "translateY(0)" : "translateY(-10px)",
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        transition: "all 0.3s ease-in-out",
        borderRadius: "0 0 4px 4px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="search-form"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <label htmlFor="inline-search-input" className="screen-reader-text">
          Search for:
        </label>
        <input
          ref={inputRef}
          type="search"
          id="inline-search-input"
          name="s"
          placeholder="Search for:"
          className="search-input"
          style={{
            flex: 1,
            padding: "10px 15px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "rgba(0, 0, 0, 0.3)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(0, 0, 0, 0.1)";
          }}
        />
        <input type="hidden" name="post_type" value="product" />
        <button
          type="submit"
          className="search-submit-button"
          aria-label="Search"
          style={{
            padding: "10px 15px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#333";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#000";
          }}
        >
          <FiSearch size={20} />
        </button>
        <button
          type="button"
          onClick={onClose}
          className="search-close-button"
          aria-label="Close search"
          style={{
            padding: "10px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#666";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#000";
          }}
        >
          <FiX size={20} />
        </button>
      </form>
    </div>
  );
}

