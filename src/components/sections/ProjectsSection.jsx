import React, { useState } from 'react';
import TerminalPrompt from '../common/TerminalPrompt';
import Card from '../common/Card';
import Chip from '../common/Chip';
import CodeBlock from '../common/CodeBlock';
import Lightbox from '../common/Lightbox';
import { projects } from '../../data/portfolioData';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section>
      <TerminalPrompt command="ls projects/" />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const isExpanded = expandedProject === project.id;
          return (
            <Card key={project.id} className="overflow-hidden hover:shadow-[0_15px_45px_-20px_rgba(255,59,99,0.8)] transition-shadow">
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold font-mono text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Chip key={tag} variant="outline">
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Toggle project details"
                  >
                    {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>

                {project.media && project.media.length > 0 && (
                  <div className="rounded-xl overflow-hidden border border-[#FF3B63]/20">
                    <img
                      src={project.media[0]}
                      alt={`${project.title} preview`}
                      className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setLightboxImage(project.media[0])}
                    />
                  </div>
                )}

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, linkIndex) => (
                      <Chip key={linkIndex} href={link.url}>
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {link.label}
                      </Chip>
                    ))}
                  </div>
                )}

                {isExpanded && (
                  <div className="pt-4 border-t border-[#FF3B63]/20 space-y-4">
                    {project.problem && (
                      <div>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-1">Problem</h4>
                        <p className="text-gray-200 text-sm">{project.problem}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-1">Solution</h4>
                        <p className="text-gray-200 text-sm">{project.solution}</p>
                      </div>
                    )}
                    {project.tools && (
                      <div>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-1">Tools</h4>
                        <p className="text-gray-200 text-sm">{project.tools}</p>
                      </div>
                    )}
                    {project.outcome && (
                      <div>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-1">Outcome</h4>
                        <p className="text-gray-200 text-sm">{project.outcome}</p>
                      </div>
                    )}
                    {project.codeSnippets && project.codeSnippets.length > 0 && (
                      <div>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-2">Code</h4>
                        {project.codeSnippets.map((snippet, index) => (
                          <CodeBlock key={index} code={snippet.code} language={snippet.language} title={snippet.title} />
                        ))}
                      </div>
                    )}
                    {project.media && project.media.length > 1 && (
                      <div>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-2">Gallery</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.media.slice(1).map((media, index) => (
                            <img
                              key={index}
                              src={media}
                              alt={`${project.title} media ${index + 2}`}
                              className="w-full h-40 object-cover rounded-xl border border-[#FF3B63]/20 cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() => setLightboxImage(media)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
};

export default ProjectsSection;