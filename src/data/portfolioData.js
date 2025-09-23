import { Code, Cpu, Settings, Brain } from 'lucide-react';

export const heroContent = {
  name: 'Jagriti (Jojo) Jain',
  titleHighlight: '(Jojo)',
  tagline: 'Robotics & Control Systems • Mechatronics • Simulation',
  resumeUrl: '#',
  email: 'jojo@example.com',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com'
};

export const navSections = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'experience', label: 'Experience', path: '/experience' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'gallery', label: 'Gallery', path: '/gallery' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

export const pageIntros = {
  about: {
    eyebrow: 'Get to know me',
    title: 'About',
    highlight: 'Jagriti',
    description:
      'I am a controls-focused engineer who loves blending robotics, mechanics, and software to ship resilient systems. This page gathers the story and quick facts behind my work.'
  },
  experience: {
    eyebrow: 'Career timeline',
    title: 'Experience in',
    highlight: 'Robotics & Controls',
    description:
      'From academic labs to industrial automation, I grow by getting close to the hardware, logging data, and tuning systems until they behave. Dive into the roles and contributions that shaped my skill set.'
  },
  projects: {
    eyebrow: 'Build logs',
    title: 'Projects &',
    highlight: 'Case Studies',
    description:
      'Explore a mix of medical devices, perception pipelines, and automation tooling where I led the design, controls, or data story. Each project highlights the decisions, tools, and outcomes.'
  },
  skills: {
    eyebrow: 'Tools of the trade',
    title: 'Technical',
    highlight: 'Skill Stack',
    description:
      'A snapshot of the software, hardware, and analytical tools I rely on when building robots and automation workflows.'
  },
  gallery: {
    eyebrow: 'Workshop snapshots',
    title: 'Project',
    highlight: 'Gallery',
    description:
      'Scroll through renders, prototypes, and lab captures that spotlight the tactile side of my work.'
  },
  contact: {
    eyebrow: 'Let’s collaborate',
    title: 'Connect with',
    highlight: 'Jagriti Jain',
    description:
      'Reach out if you want to talk robotics, controls, or future collaborations. Email, social, and resume links live below.'
  }
};

export const quickFacts = [
  { label: 'Location', value: 'India' },
  { label: 'Focus', value: 'Controls/Robotics/Simulation' },
  { label: 'Open to', value: 'Internships • Research • Full-time roles' },
  { label: 'Education', value: 'UIUC MechE (ECE Minor)' }
];

export const experiences = [
  {
    id: 'ta',
    role: 'Course Assistant',
    org: 'Spatial Visualization for Engineers (UIUC)',
    location: 'Urbana-Champaign, IL',
    dates: '2022',
    image: '/api/placeholder/80/80',
    tools: ['Onshape/SolidWorks', 'Whiteboard visualizations', 'Rubric templates'],
    bullets: [
      'Mentored 80+ students on 3D geometry, orthographic projection, and isometrics',
      'Built practice sets that improved spatial reasoning capabilities',
      'Held weekly office hours and provided efficient grading with detailed feedback',
      'Introduced "error-pattern" rubrics cutting grading time by ~30%',
      'Improved feedback clarity and student comprehension rates'
    ],
    mediaSlots: ['/api/placeholder/400/300']
  },
  {
    id: 'lab-tech',
    role: 'Lab Technician',
    org: 'Micro/Nano Lab (UIUC)',
    location: 'Urbana-Champaign, IL',
    dates: '2022 - 2023',
    image: '/api/placeholder/80/80',
    tools: ['Cleanroom SOPs', 'Mask design', 'Profilometry', 'Optical microscopy'],
    bullets: [
      'Supported photolithography, deposition, and metrology processes',
      'Maintained SOPs and calibration logs for critical equipment',
      'Assisted with mask design and wafer processing workflows',
      'Created step-by-step safety and startup checklists',
      'Implemented maintenance tracker reducing unscheduled downtime by ~20%'
    ],
    mediaSlots: ['/api/placeholder/400/300']
  },
  {
    id: 'cad',
    role: 'CAD Modeler',
    org: 'Engineering Design Projects',
    location: 'Various',
    dates: '2023 - 2024',
    image: '/api/placeholder/80/80',
    tools: ['SolidWorks', 'Fusion 360', 'Onshape', 'FEA (basic)'],
    bullets: [
      'Built parametric assemblies for robot mechanisms, test rigs, and F1 suspension systems',
      'Produced manufacturing drawings and BOMs for 3D printing and CNC machining',
      'Ran motion studies and static FEA for early design validation',
      'Created photorealistic renders and assembly animations for presentations'
    ],
    mediaSlots: ['/api/placeholder/400/300', '/api/placeholder/400/300']
  },
  {
    id: 'wipro',
    role: 'Junior Member',
    org: 'Wipro PARI (Automation/Robotics)',
    location: 'India',
    dates: '2024 - Present',
    link: 'https://www.wipro.com/',
    image: '/api/placeholder/80/80',
    tools: ['PLC basics', 'Robot teach pendant', 'Excel/Notion logs'],
    bullets: [
      'Supported debugging on industrial automation cells with PLC/robot integration',
      'Assisted with kinematics/trajectory sanity checks and station bring-up tasks',
      'Helped triage line issues with seniors and documented recurrent failure modes',
      'Gained hands-on experience with industrial automation workflows'
    ],
    mediaSlots: ['/api/placeholder/400/300']
  }
];

export const projects = [
  {
    id: 'mri-dynamometer',
    title: 'MRI-Compatible Dynamometer',
    summary: 'Hydraulic force sensor for MRI environments - 90% cost reduction',
    tags: ['CAD', 'FEA', 'LabVIEW', 'MATLAB', 'Medical Device'],
    problem: '$6,000 commercial sensor not MRI-safe/cost-effective',
    solution:
      'Designed hydraulic transmission + MRI-safe sensor housing; modeled loads; created assembly CAD; assisted with benchtop validation and calibration scripts.',
    tools: 'CAD (SolidWorks), basic FEA, LabVIEW/DAQ, MATLAB',
    outcome: '~90% cost reduction ($6k → ~$500), functional prototype validated in MRI bench tests',
    media: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'],
    links: [
      { label: 'Design Doc', url: '#' },
      { label: 'BOM', url: '#' },
      { label: 'Poster', url: '#' }
    ],
    codeSnippets: [
      {
        language: 'matlab',
        title: 'Calibration Script',
        code: `% MRI Dynamometer Calibration
function calibrated_force = calibrate_sensor(raw_voltage)
    % Calibration coefficients from bench tests
    a = 125.4;  % N/V
    b = -2.1;   % N offset

    % Apply calibration curve
    calibrated_force = a * raw_voltage + b;

    % Filter noise
    calibrated_force = movmean(calibrated_force, 5);
end`
      }
    ]
  },
  {
    id: 'afm-control',
    title: 'AFM Control System',
    summary: 'Hybrid H∞ + PID controller for atomic force microscopy',
    tags: ['Control Systems', 'MATLAB', 'LabVIEW', 'H-infinity'],
    problem: 'Noisy interaction forces + tracking error in AFM reference following',
    solution:
      'Modeled cantilever and DMT contact in MATLAB; synthesized H∞ controller for robustness; tuned PID in LabVIEW; integrated hybrid control.',
    tools: 'MATLAB/Simulink, LabVIEW, State-space modeling',
    outcome: 'Smoother tracking and improved disturbance rejection with reproducible pipeline',
    media: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    links: [{ label: 'Technical Report', url: '#' }],
    codeSnippets: [
      {
        language: 'matlab',
        title: 'H-infinity Controller Design',
        code: `% AFM H-infinity Controller Synthesis
s = tf('s');
G = 1/(s^2 + 0.1*s + 1);  % Cantilever model

% Weighting functions
W1 = (s + 1)/(0.01*s + 1);  % Performance
W2 = 0.1;                   % Control effort

% Synthesize controller
K = hinfsyn(G, W1, W2);`
      }
    ]
  },
  {
    id: 'rmdlo',
    title: 'RMDLO - Deformable Object Perception',
    summary: 'Deep learning pipeline for cable/wire segmentation and curve extraction',
    tags: ['PyTorch', 'OpenCV', 'Computer Vision', 'Deep Learning'],
    problem: 'Cables/wires/ropes are hard to segment/represent for manipulation',
    solution:
      'Trained DeepLabV3 on curated datasets; integrated ARIADNE+ for curve extraction; skeletonized masks for planning; built evaluation scripts.',
    tools: 'PyTorch, OpenCV, ARIADNE+, Python',
    outcome: 'Higher mIoU on wire-like classes; produced curves usable by planners',
    media: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    links: [
      { label: 'GitHub Repo', url: '#' },
      { label: 'Paper', url: '#' }
    ],
    codeSnippets: [
      {
        language: 'python',
        title: 'Training Loop',
        code: `import torch
import torch.nn as nn
from torchvision import models

class DeformableSegNet(nn.Module):
    def __init__(self, num_classes=3):
        super().__init__()
        self.backbone = models.segmentation.deeplabv3_resnet50(
            pretrained=True, progress=True
        )
        self.backbone.classifier[4] = nn.Conv2d(
            256, num_classes, kernel_size=1
        )

    def forward(self, x):
        return self.backbone(x)['out']`
      }
    ]
  },
  {
    id: 'fiber-encoder',
    title: 'Fiber-Optic Angle Encoder',
    summary: 'MRI-safe joint angle sensing with optical components',
    tags: ['MRI-Safe', 'Optics', 'Arduino', 'CAD', '3D Printing'],
    solution:
      'Designed optical encoder with photodiodes + mask; built compact housing; wrote calibration routine (intensity→angle).',
    outcome: 'Prototype with <2° error across operating range; documented assembly',
    media: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    links: [{ label: 'Build Notes', url: '#' }],
    codeSnippets: [
      {
        language: 'arduino',
        title: 'Angle Readout',
        code: `// Fiber-optic angle encoder readout
#define PHOTODIODE_PIN A0
#define LED_PIN 9

float calibration_curve(int raw_reading) {
  // Polynomial fit from calibration data
  float voltage = raw_reading * (5.0/1023.0);
  return -45.2 * voltage*voltage + 180.5 * voltage - 90.1;
}

void loop() {
  int raw = analogRead(PHOTODIODE_PIN);
  float angle = calibration_curve(raw);
  Serial.println(angle);
  delay(10);
}`
      }
    ]
  },
  {
    id: 'f1-suspension',
    title: 'F1 Double-Wishbone Suspension',
    summary: 'Parametric CAD design with kinematics analysis',
    tags: ['CAD', 'Kinematics', 'FEA', 'Motorsports'],
    solution:
      'Parametric CAD; geometry tuning for camber gain, roll stiffness; motion study; early FEA on control arms.',
    outcome: 'Validated kinematics for target ride height range; clean visualization pack',
    media: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    links: [{ label: 'CAD Viewer', url: '#' }],
    codeSnippets: []
  }
];

export const skillCategories = [
  {
    title: 'Robotics & Control',
    icon: Settings,
    skills: ['PID', 'H∞', 'Impedance', 'State-Space', 'Trajectory Gen', 'Kinematics/Dynamics']
  },
  {
    title: 'Simulation & Tools',
    icon: Cpu,
    skills: ['MATLAB/Simulink', 'Webots', 'Gazebo', 'Fusion 360', 'SolidWorks', 'ANSYS (basic)']
  },
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'C', 'C#', 'ROS2', 'OpenCV', 'URScript', 'Git']
  },
  {
    title: 'Data & ML',
    icon: Brain,
    skills: ['PyTorch', 'Classical CV', 'Dataset Curation', 'Metrics']
  }
];

export const galleryItems = [
  { id: 1, src: '/api/placeholder/300/200', caption: 'Robot arm assembly', type: 'image' },
  { id: 2, src: '/api/placeholder/300/400', caption: 'CAD rendering of suspension', type: 'image' },
  { id: 3, src: '/api/placeholder/400/300', caption: 'Lab testing setup', type: 'image' },
  { id: 4, src: '/api/placeholder/300/300', caption: 'MRI dynamometer prototype', type: 'image' },
  { id: 5, src: '/api/placeholder/400/250', caption: 'Control system diagram', type: 'image' },
  { id: 6, src: '/api/placeholder/350/300', caption: 'Fiber optic encoder', type: 'image' }
];

export const contactDetails = {
  email: 'jojo@example.com',
  phone: '+91 98765 43210',
  location: 'India',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com'
};