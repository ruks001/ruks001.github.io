window.RESEARCH_DATA = [

  { id : "Robotic Perception",
    number: "01",

    title: "Robotic Perception",

    shortDescription:
      "Research on perception systems that allow robots and autonomous systems to understand their surroundings.",

    description:
        "My research focuses on developing vision-based perception methods that enable robots and intelligent transportation systems to understand their surroundings and make reliable decisions. I use both CNN- and Transformer-based architectures for semantic segmentation, including lane, drivable-area, obstacle, and object segmentation from onboard camera images.\n\n" +
        "A major part of my work investigates the visual domain gap between simulation and real-world environments. I study latent feature representations and develop methods to reduce representation mismatch so that perception and navigation policies learned in simulation can transfer more effectively to real robotic platforms.\n\n" +
        "I also work on camera-view transformation for intelligent transportation applications, including converting traffic-intersection camera views into bird's-eye-view representations to provide a more structured spatial understanding of vehicles and the surrounding roadway.\n\n" +
        "Beyond standalone perception, I integrate visual representations with deep reinforcement learning for camera-based robotic navigation, allowing mobile robots to learn navigation behaviors directly from visual observations.",

    topics: [
      "Computer Vision",
      "Semantic Segmentation",
      "Object Detection",
      "Scene Understanding",
      "Multimodal Perception"
    ]
  },


  { id : "Autonomous Navigation",
    number: "02",

    title: "Autonomous Navigation",

    shortDescription:
      "Research on localization, planning, decision-making, and navigation for autonomous robotic systems.",

    description:
      "My research in autonomous navigation focuses on enabling mobile robots to move safely and reliably in outdoor and structured environments using perception, localization, planning, and control. I develop complete navigation pipelines that combine camera-based perception, GNSS and sensor-fusion localization, map-based trajectory generation, and path-following controllers for real robotic platforms.\n\n" +
        "I have worked with OpenStreetMap-based route generation, GPS and EKF localization, and pure-pursuit-based trajectory tracking for autonomous ground robots. I also integrate RGB-D cameras and LiDAR with navigation systems to provide environmental awareness and support obstacle-aware decision-making.\n\n" +
        "In addition to conventional navigation pipelines, I investigate learning-based navigation using deep reinforcement learning, where robots learn navigation behaviors directly from visual observations. My work explores how perception features, learned policies, and higher-level decision-making can be combined to improve autonomous navigation in complex real-world environments.",

    topics: [
      "Visual Navigation",
    "Localization & Sensor Fusion",
    "Trajectory Planning",
    "Deep Reinforcement Learning",
    "Autonomous Mobile Robots"
    ]
  },


  { id : "Embodied AI",
    number: "03",

    title: "Embodied AI & Vision-Language Models",

    shortDescription:
      "Research on multimodal reasoning and high-level decision-making for intelligent robotic systems.",

    description:
      "My research in embodied AI explores how vision-language and vision-language-action models can provide higher-level reasoning and decision-making capabilities for autonomous robots. I focus on connecting multimodal foundation models with robotic perception and navigation so that robots can interpret visual scenes, reason about obstacles and surrounding conditions, and select appropriate actions.\n\n" +
        "A major part of this work investigates conditional vision-language-action architectures for mobile robot navigation. Rather than continuously relying on computationally expensive vision-language models, I develop systems in which lightweight perception models first analyze the environment and activate deeper multimodal reasoning only when complex situations require it. This allows the robot to balance real-time responsiveness with the reasoning capabilities of large multimodal models.\n\n" +
        "I also evaluate and adapt vision-language models for robotic decision-making and investigate their deployment on edge computing platforms. My work includes multimodal reasoning, action prediction, obstacle-aware navigation, model fine-tuning, and integration of vision-language models with physical robotic systems.",

    topics: [
    "Vision-Language Models",
    "Vision-Language-Action Models",
    "Embodied AI",
    "Multimodal Reasoning",
    "Robot Decision-Making"
]
  },


  { id : "Sim2Real",
    number: "04",

    title: "Sim-to-Real Learning",

    shortDescription:
      "Research on transferring models and robotic policies from simulation environments to real systems.",

    description:
      "My sim-to-real research focuses on reducing the gap between models trained in simulation and their performance on physical robotic systems. I use simulation environments to generate controlled training scenarios for perception, reinforcement learning, and autonomous navigation, while studying how learned representations and policies change when they are transferred to real-world environments.\n\n" +
        "A major focus of my work is the visual and latent-domain gap between simulated and real images. I investigate feature representations learned by CNN-based perception models and develop methods to improve latent alignment between simulation and real-world data. This allows reinforcement-learning policies trained using simulated visual features to transfer more reliably to physical robots without requiring extensive real-world policy training.\n\n" +
        "I develop custom simulation environments in Webots and CARLA for mobile robotics and intelligent transportation applications. These environments include autonomous robot navigation, reinforcement-learning scenarios, custom robotic platforms, and traffic-intersection simulations. I use these simulation systems together with real-world experiments to study domain adaptation, zero-shot transfer, perception transfer, and deployment of learned navigation policies on physical robotic platforms.",

    topics: [
    "Sim-to-Real Transfer",
    "Domain Adaptation",
    "Latent Representation Alignment",
    "Reinforcement Learning",
    "Real-World Deployment"
]
  },

    { id : "Medical Image Analysis",
    number: "05",

    title: "Medical Image Analysis",

    shortDescription:
      "Research on deep learning for medical image segmentation, disease classification, and intelligent healthcare applications.",

    description:
      "My research in medical image analysis focuses on developing deep learning architectures for medical image segmentation and disease classification. I have developed and optimized neural network models for brain tissue segmentation from magnetic resonance imaging (MRI), exploring advanced encoder-decoder architectures to improve segmentation performance. My work includes the development of SIP-UNet, a sequential-input, parallel U-Net architecture designed for brain tissue segmentation.\n\n" +
      "I also investigate generative adversarial networks (GANs) and federated learning for medical image segmentation. My work includes developing a dissimilarity-corrective GAN architecture for brain image segmentation and a cloud-based federated learning framework for MRI segmentation. These approaches explore alternative learning architectures and distributed training methods for medical imaging applications.\n\n"+
      "Beyond segmentation, I have developed deep learning models for Alzheimer's disease classification, including fully connected neural networks for binary classification. My broader research also includes collaborative work on AI-based cardiac ejection fraction estimation using 12-lead ECG signals, extending the application of deep learning from medical imaging to biomedical signal analysis.",

    topics: [
    "Medical Image Segmentation",
    "Brain MRI Analysis",
    "Deep Learning",
    "Alzheimer's Disease Classification",
    "Generative Adversarial Networks",
    "Federated Learning"
]
  }

];