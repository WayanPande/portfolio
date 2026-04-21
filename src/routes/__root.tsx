import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import { PHProvider } from '@/components/providers'

// Use a normal string classname instead of Next.js next/font
const geistSansClass = "font-sans"

export const Route = createRootRoute({
  component: () => (
    <div className={geistSansClass}>
      <Navbar />
      <main className="bg-grid-small-black/20 dark:bg-grid-small-white/20">
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_60%,black)] dark:bg-black"></div>
        <Suspense>
          <PHProvider>
            <Outlet />
          </PHProvider>
        </Suspense>
      </main>
      {/* <TanStackRouterDevtools /> */}
    </div>
  ),
})
