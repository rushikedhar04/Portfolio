'use client'

import { SplineSceneBasic } from "@/components/ui/demo"
import { SplineScene } from "@/components/ui/splite"
import { SpotlightIbelick } from "@/components/ui/spotlight-ibelick"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Welcome to the Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Experience the next generation of web design with interactive 3D scenes,
              stunning animations, and cutting-edge technology.
            </p>
            <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-white/20">
                Get Started
              </button>
              <button className="px-8 py-4 bg-black text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Featured 3D Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Interactive 3D Experience
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Explore our immersive 3D scenes that bring your web experience to life
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <SplineSceneBasic />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to create stunning web experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="bg-zinc-950 border-white/10 backdrop-blur-sm hover:scale-105 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
              <SpotlightIbelick size={300} />
              <div className="p-8 relative z-10">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Lightning Fast
                </h3>
                <p className="text-gray-500">
                  Built with Next.js 15 and React 19 for blazing fast performance and optimal user experience.
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-zinc-950 border-white/10 backdrop-blur-sm hover:scale-105 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
              <SpotlightIbelick size={300} />
              <div className="p-8 relative z-10">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Beautiful Design
                </h3>
                <p className="text-gray-500">
                  Crafted with Tailwind CSS and shadcn/ui components for a modern, responsive design system.
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-zinc-950 border-white/10 backdrop-blur-sm hover:scale-105 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
              <SpotlightIbelick size={300} />
              <div className="p-8 relative z-10">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  3D Interactive
                </h3>
                <p className="text-gray-500">
                  Powered by Spline for stunning 3D graphics and immersive interactive experiences.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Full 3D Scene Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Explore in 3D
            </h2>
            <p className="text-gray-500 text-lg">
              Interact with our 3D scene - drag, rotate, and discover
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="w-full h-[600px] bg-zinc-950 border-white/10 overflow-hidden">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black border-t border-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building the future of web experiences
          </p>
          <button className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-110 transition-transform duration-200 shadow-lg shadow-white/10 hover:shadow-white/20">
            Start Building Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 bg-black">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            Built with Next.js, TypeScript, Tailwind CSS, and Spline
          </p>
          <p className="text-gray-700 text-sm mt-2">
            © 2026 Spline 3D Landing. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
