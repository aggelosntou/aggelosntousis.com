import Sidebar from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      
      {/* Mobile header */}
      <div className="lg:hidden border-b border-border p-4">
        <h1 className="text-xl font-medium">Aggelos Ntousis</h1>
      </div>

      {/* Main content */}
      <main className="lg:ml-64 max-w-3xl mx-auto p-6 lg:p-12">
        <section id="main" className="mb-16">
          <h1 className="text-3xl mb-4">
            This is a highly controversial space. I need anwears or good questions. 
          </h1>
          
          <p className="mb-4">
            TGK ATH 1312 KP CITY
          </p>
          
          <p className="mb-4">
            Im Aggelos bitch. DeepLearning, B2B SaaS and Founder at 19. Accepted to YC 2025 Batch.
          </p>
          
          <p className="mb-6">
            Below are some of the things I've been doing.
          </p>

          {/* Currently section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Currently</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-t border-border">
                  <td className="py-3 pr-4 text-muted-foreground align-top whitespace-nowrap">
                    Aug 2024 - Present
                  </td>
                  <td className="py-3">
                    Pursuing <strong>Bachelor's in Mathematics</strong> at NKUA. Useless fkin thing I believe. But what to do lets leave the college experience. 
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="py-3 pr-4 text-muted-foreground align-top whitespace-nowrap">
                    Sep 2024 - Present
                  </td>
                  <td className="py-3">
                    Working on <strong>Math Research</strong> involving sampling algorithms. Also doing shitty computervision on satellite data. 
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Previously section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Previously</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-t border-border">
                  <td className="py-3 pr-4 text-muted-foreground align-top whitespace-nowrap">
                    Oct 2024
                  </td>
                  <td className="py-3">
                    Published research paper on <a href="#">neural network optimization techniques</a>
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="py-3 pr-4 text-muted-foreground align-top whitespace-nowrap">
                    May 2024
                  </td>
                  <td className="py-3">
                    Won first place in regional mathematics olympiad at Kato Patissia. Beat Alban and Flavio to secure first place and a free coffee from Il Toto.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="py-3 pr-4 text-muted-foreground align-top whitespace-nowrap">
                    Jan 2024
                  </td>
                  <td className="py-3">
                    Built <a href="#">computer vision classification system</a> using CNNs and probability theory
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="py-3 pr-4 text-muted-foreground align-top whitespace-nowrap">
                    Sep 2023
                  </td>
                  <td className="py-3">
                    Trained by the Streets. Mathematics come second.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="about" className="mb-16 border-t border-border pt-12">
          <h2 className="text-2xl mb-4">Life</h2>
          
          <p className="mb-4">
            Is this AI age really that important or is it a buble? I have many questions to what is really work, what I want to do with my life or are the things really that dramatic career wise.
          </p>
          
          <p className="mb-4">
            Another question is if it is really possible to work at NASA or be Elon Musk or another tech figure. What does it take to become someone like that?
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Recent Announcements</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Accepted to ArchimedesAI for research on Langevin Sampling Algorithms</li>
              <li>Accepted for an internship in Demokritos for image segmentation </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mb-16 border-t border-border pt-12">
          <h2 className="text-2xl mb-4">Contact</h2>
          
          <p className="mb-4">
            Ask me anything.
          </p>
          
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong> <a href="mailto:your.email@example.com">aggelosntousis02@gmail.com</a>
            </li>
            <li>
              <strong>GitHub:</strong> <a href="https://github.com/aggelosntou" target="_blank" rel="noopener noreferrer">github.com/aggelosntou</a>
            </li>
            <li>
              <strong>LinkedIn:</strong> <a href="www.linkedin.com/in/aggelosntousis" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/aggelosntousis</a>
            </li>
          </ul>
        </section>

        <footer className="text-sm text-muted-foreground border-t border-border pt-8 pb-12">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
