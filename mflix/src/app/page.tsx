import Image from 'next/image'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fLeLorqvuk4
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center bg-black text-white px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">MFlix</span>
          <nav className="flex gap-4">
            <Link className="hover:underline" href="#">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              TV Shows
            </Link>
            <Link className="hover:underline" href="#">
              Movies
            </Link>
            <Link className="hover:underline" href="#">
              My List
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link className="text-md hover:underline" href="#">
            Shop
          </Link>
          <span className="text-md">Username</span>
          <IconUser className="h-6 w-6 text-white" />
        </div>
      </header>
      <main className="flex-1 bg-gray-900 p-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="relative group">
            <img
              alt="Thumbnail 1"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 1</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 2"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 2</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 3"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 3</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 4"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 4</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 5"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 5</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 6"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 6</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 7"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 7</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 8"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 8</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 9"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 9</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 10"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 10</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 11"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 11</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
          <div className="relative group">
            <img
              alt="Thumbnail 12"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="/placeholder.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Content Title 12</span>
              </div>
              <Button
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300 mt-2"
                variant="outline"
              >
                Play
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function IconUser(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
