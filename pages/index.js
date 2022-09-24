import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';

export default function Index() {
  return (
    <Layout>
      <SEO title="Emre Özcan" description="Emre Özcan" />
      <Header name="Emre Özcan" />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          Full Stack Developer
        </h1>
        <div className="w-full">
          <div
            className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibdivng:border-t-0"
          >
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">Follow me on</h2>
              <div className="flex text-center">
                <div onClick={()=>null}>
                <p className="mt-3 text-lg opacity-60">Github</p>
                </div>
                <div onClick={()=>null}>
                <p className="mt-3 text-lg opacity-60">StackOverFlow</p>
                </div>
                <div onClick={()=>null}>
                <p className="mt-3 text-lg opacity-60">Instagram</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer copyrightText="2022 - Emre Özcan" />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}