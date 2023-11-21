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
      <section className="overflow-x-scroll flex gap-4 p-4 bg-gray-900">
        <img
          alt="Carousel Image 1"
          className="rounded-md object-cover"
          height="600"
          src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
          style={{
            aspectRatio: "1000/600",
            objectFit: "cover",
          }}
          width="1000"
        />
        <img
          alt="Carousel Image 2"
          className="rounded-md object-cover"
          height="600"
          src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
          style={{
            aspectRatio: "1000/600",
            objectFit: "cover",
          }}
          width="1000"
        />
        <img
          alt="Carousel Image 3"
          className="rounded-md object-cover"
          height="600"
          src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
          style={{
            aspectRatio: "1000/600",
            objectFit: "cover",
          }}
          width="1000"
        />
      </section>
      <main className="flex-1 bg-gray-900 p-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="relative group">
            <img
              alt="Thumbnail 1"
              className="rounded-md object-cover transition-opacity group-hover:opacity-50"
              height="375"
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 1</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 2</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 3</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 4</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 5</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 6</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 7</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 8</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 9</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 10</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 11</span>
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
              src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg"
              style={{
                aspectRatio: "312/375",
                objectFit: "cover",
              }}
              width="312"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 text-white py-1 px-2 rounded-md text-center">
                <span>Movie Name 12</span>
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
      <footer className="bg-black text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Link className="hover:underline" href="#">
              Terms and Conditions
            </Link>
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-4">
            <Link aria-label="Facebook" href="#">
              <IconFacebook className="h-6 w-6 text-white" />
            </Link>
            <Link aria-label="Twitter" href="#">
              <IconTwitter className="h-6 w-6 text-white" />
            </Link>
            <Link aria-label="Instagram" href="#">
              <IconInstagram className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </footer>

 </div>
  )
}

function IconFacebook(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function IconInstagram(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function IconTwitter(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
