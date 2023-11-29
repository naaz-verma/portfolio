import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Languages: C++ | Python | Java | JavaScript" },
  { skill: "Development Frameworks: Django | Android" },
  { skill: "ML frameworks: Tensorflow | Keras" },
  { skill: "Cloud: Azure | AWS" },
  { skill: "Version Control: Git | Azure Devops" },
  { skill: "Python Libraries: Numpy | Pandas | sklearn | matplotlib | seaborn | NLTK" },
  { skill: "Dev Tools: Android Studio | PyCharm | Jupyter notebook | Google colab | Vscode" },
  
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Naaz and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              and AI enthusiast.
            </p>
            <br />
            <p>
              I am pursuing my graduation from Bennett University, India
              in Computer Science Engineering and am working as 
              <span className="font-bold">{" Associate DevOps Engineer"}</span> at 
              <span className="font-bold">{" CAW Studios"}</span>.
            </p>
            <br />
            <p>
              As a tech-enthusiast I I am passionately engaged 
              in the dynamic intersection of technology and innovation.
              My academic journey has equipped me with a robust foundation,
              and I am continually driven to explore the evolving landscape of computing.
              With working in DevOps, I bring a wealth of experience 
              in optimizing software development and IT operations.
            </p>
            <br />
            <p>
            My fascination with artificial intelligence fuels my commitment to staying at the 
            forefront of AI technologies. I am dedicated to harnessing the power of AI to develop
            intelligent solutions that drive efficiency and innovation across diverse domains.
            Crafting innovative software solutions is at the core of my professional journey. 
            </p>
            <br />
            <p>
            Looking ahead, I am enthusiastic about contributing to the evolution of technology.
            My goal is to not only stay ahead of the curve but also to play a pivotal role in shaping
            the future of AI, software solutions, and cloud computing through innovation and exploration.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
