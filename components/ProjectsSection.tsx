import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Edulex",
    description:
      "Edulex is an android application. It uses the feature of Augmented reality to display basic primary topics like- Skeleton, Solar system.",
    github: "https://github.com/naaz-verma/Edulex.git",
 
  },
  {
    name: "Emotion Detection",
    description: "CNN model to detect emotions based on given images",
    github: "https://github.com/naaz-verma/emotion-detection.git",
  },
  {
    name: "Sentimental Analysis",
    description:
      "Sentiment Analysis performed using various ML and DL models, to put a comparison between all.",
    github: "https://github.com/naaz-verma/NLP_sentimentAnalysis.git",
  },
  {
    name: "Graph visulisation",
    description:
      "Graph visualization in python, using NLP to find similarity between various research papers and showing the connection between them.",
    github: "https://github.com/naaz-verma/Graph_Visualization.git",
  },
  {
    name: "Stock market analysis",
    description:
      "Stock market analysis including -Stock trend prediction using LSTM DL model, Fraud detection in stocks using ANN, Naive Byaes algorithms, Algorithmic trading",
    github: "https://github.com/naaz-verma/stock_market_analysis.git",
  },
  {
    name: "Satellite image segmentation",
    description:
      "Using deep learning to understand satellite image data and perform segmentation",
    github: "https://github.com/naaz-verma/Satellite_image_project.git",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
                <div className="flex flex-col md:space-x-12">
                 
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
             
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
