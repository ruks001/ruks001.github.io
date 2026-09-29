window.PLATFORM_DATA = [

  {
    id: "spark-mobile-robot",
    name: "SPARK Mobile Robot",
    category: "Robot Platform",
    image: "assets/files/platforms/spark.jpg",
    shortDescription: "Outdoor mobile robotic platform used for perception, navigation, and autonomous-system experiments.",
    description: "The SPARK mobile robot is a research platform designed for autonomous robotics and intelligent navigation. It is equipped with an RGB-D camera for visual perception and depth sensing. It also includes GPS and IMU sensors for positioning and motion estimation. A LiDAR sensor is used to measure the surrounding environment and detect nearby obstacles. The robot can be operated manually using a remote controller. It can also be driven autonomously using onboard software and sensor feedback. The robot runs on ROS 2 for communication between perception, localization, planning, and control modules. An NVIDIA Jetson platform is used for onboard processing and for running computer vision and AI models in real time.\n\n" +
        "I use the SPARK robot for research on autonomous navigation and robotic perception. Global trajectories are developed to guide the robot from a starting point to a desired destination. Local trajectory generation is used to respond to nearby obstacles and changes in the environment. Lane segmentation helps identify the drivable region and supports lane-following behavior. Camera and sensor information are combined to support localization and navigation during real-world experiments. Vision-language-action models are also studied for high-level decision-making. These models help the robot interpret the scene and select an appropriate navigation action when more complex reasoning is needed. The platform supports testing of the complete pipeline from perception and planning to autonomous control on a real mobile robot."
  },
    {
    id: "Custom Mobile Robot",
    name: "Custom Mobile Robot",
    category: "Robot Platform",
    image: "assets/files/platforms/custom_robot.jpg",
    shortDescription: "Simulation environment used to develop and test robotic perception and navigation before real-world deployment.",
    description: "The custom mobile robot is a modified 1/6-scale Traxxas vehicle developed as a research platform for autonomous driving, robotic perception, and intelligent navigation. The original vehicle platform was modified to support autonomous control and onboard computation. A VESC MK6VI motor controller is used to interface with the vehicle drivetrain and provide programmable control of vehicle motion. An NVIDIA Jetson AGX platform is used for onboard processing and for running perception, planning, control, and AI algorithms in real time. A Livox LiDAR sensor provides three-dimensional information about the surrounding environment and supports obstacle detection, mapping, and localization. A ZED 2i stereo RGB-D camera is used for visual perception, depth estimation, and scene understanding. The platform runs on ROS 2 to support communication between sensing, perception, localization, planning, and vehicle control modules. The vehicle can be operated as a flexible experimental platform for developing and testing autonomous driving algorithms.\n\n" +
        "\n" +
        "I use this custom platform for research on autonomous navigation, perception, trajectory planning, and learning-based vehicle control. Camera and LiDAR information are used to understand the environment, detect obstacles, and identify regions where the vehicle can safely travel. Global trajectories are generated to guide the vehicle toward a desired destination, while local planning methods are used to respond to nearby obstacles and environmental changes. Vision-based perception methods, including lane and drivable-region segmentation, are used to support path tracking and autonomous control. The platform also provides an environment for studying AI-based decision-making and reinforcement learning methods for autonomous navigation.\n\n" +
        "\n" +
        "A corresponding simulation environment was developed in Webots to support algorithm development and testing before deployment on the physical vehicle. The simulation reproduces the mobile platform and its sensing configuration, allowing navigation, perception, planning, and control algorithms to be evaluated in controlled scenarios. Different road layouts, obstacles, and environmental conditions can be introduced in simulation to test system behavior and improve the algorithms before real-world experiments. Together, the Webots simulation and physical vehicle provide a complete development framework for testing the autonomous driving pipeline from perception and decision-making to trajectory generation and real-time vehicle control."
  },

  {
  id: "F1TENTH",
  name: "F1TENTH",
  category: "Robot Platform",
  image: "assets/files/platforms/f1tenth.jpg",
  shortDescription: "Simulation environment used to develop and test robotic perception and navigation before real-world deployment.",
  description: "The F1TENTH vehicle is a small-scale autonomous racing and robotics platform designed for research in autonomous driving, perception, planning, and control. It is based on a high-performance electric RC vehicle chassis and is equipped with onboard computing and sensing hardware. A LiDAR sensor is commonly used to measure the surrounding environment and detect obstacles, track boundaries, and other objects. Camera sensors can also be used for visual perception and environment understanding. The vehicle includes an inertial measurement unit for estimating motion and orientation, while wheel odometry and other sensor information can be used to support localization. The platform can be operated manually using a remote controller or driven autonomously using onboard software. It runs on ROS 2 for communication between sensing, localization, planning, and control modules. An NVIDIA Jetson platform is used for onboard processing and for running perception, control, and AI algorithms in real time.\n\n" +
      "\n" +
      "I use the F1TENTH vehicle for research on autonomous driving, robotic perception, and intelligent navigation. Global and local trajectory planning methods are developed to guide the vehicle through tracks and changing environments. LiDAR and camera information are used for obstacle detection, localization, and understanding the surrounding environment. Lane and drivable-region perception can be used to support path tracking and autonomous vehicle control. Different planning and control algorithms are studied for maintaining the desired trajectory while responding to obstacles and changes in the environment. The platform can also be used to investigate learning-based perception, reinforcement learning, and vision-based decision-making methods. These methods allow the vehicle to learn navigation behavior and make driving decisions from sensor observations. The F1TENTH platform supports testing of the complete autonomous driving pipeline, from sensing and perception to planning, decision-making, and real-time vehicle control."
  },

  {
  id: "Duckiebot",
  name: "Duckiebot",
  category: "Robot Platform",
  image: "assets/files/platforms/duckiebot.jpg",
  shortDescription: "Simulation environment used to develop and test robotic perception and navigation before real-world deployment.",
  description: "The Duckiebot is a small-scale autonomous mobile robot designed for research and education in autonomous driving, computer vision, and robotic control. It is equipped with a forward-facing camera for visual perception and uses onboard computing to process sensor information and execute navigation algorithms. The platform is designed to operate in structured road environments with lane markings, intersections, and other traffic elements. It supports autonomous vehicle research using lightweight sensing and control systems, making it suitable for testing perception and learning-based navigation methods. The Duckiebot software framework provides tools for camera processing, vehicle control, simulation, and autonomous driving experiments.\n\n" +
      "\n\n" +
      "I use the Duckiebot for research on sim-to-real autonomous lane following using deep reinforcement learning. A reinforcement learning policy is trained in simulation to learn steering and navigation behavior from visual observations of the road. Lane information extracted from camera images is used to help the robot understand its position relative to the road and select appropriate driving actions. The simulation environment allows the learning algorithm to experience different lane positions, curves, and driving conditions before being transferred to the physical robot. The trained policy is then evaluated on the real Duckiebot to study how well the learned behavior transfers from simulation to real-world conditions. This platform is used to investigate sim-to-real transfer, visual perception, representation learning, and deep reinforcement learning for autonomous lane-following applications."
  },

  {
    id: "CARLA",
    name: "CARLA",
    category: "Simulation Tool",
    image: "assets/files/platforms/carla.png",
    shortDescription: "Simulation environment used to develop and test robotic perception and navigation before real-world deployment.",
    description: "I developed a custom traffic-intersection simulation environment in CARLA to support research on traffic monitoring and sim-to-real perception. Instead of relying only on the default CARLA maps and scenarios, I imported a custom-designed intersection map and configured the environment specifically for roadside traffic-camera experiments. I created vehicle routes with defined starting and destination points so that vehicles automatically travel through the intersection and generate realistic traffic movements. I also configured the camera viewpoint to represent a fixed traffic-monitoring camera, allowing consistent collection of intersection imagery under controlled simulation conditions.\n\n" +
        "\n" +
        "The main purpose of this CARLA environment is to generate simulation data for traffic-camera perspective transformation and sim-to-real research. I use the simulated camera images to study the transformation from an oblique roadside-camera view to a bird’s-eye-view representation of the intersection. The bird’s-eye view provides a more structured spatial representation that can simplify downstream tasks such as vehicle localization, trajectory tracking, traffic-flow analysis, and intersection-level behavior monitoring. By controlling vehicle routes, traffic movement, camera placement, and the intersection geometry in simulation, I can systematically generate data and evaluate the perspective-transformation pipeline before transferring the developed methods to real traffic-camera data."
  },

  {
    id: "webots",
    name: "Webots",
    category: "Simulation Tool",
    image: "assets/files/platforms/webot.png",
    shortDescription: "Simulation environment used to develop and test robotic perception and navigation before real-world deployment.",
    description: "I developed custom simulation scenarios in Webots to study sim-to-real transfer and the domain gap between simulated and real robotic environments. Models of the SPARK mobile robot and my custom mobile robot were integrated into the simulation so that perception, navigation, and control algorithms could first be developed in a controlled environment. The simulated scenarios were intentionally kept simpler than the real world while preserving the important visual and structural features needed for navigation. This makes it possible to study how much complexity is actually required in simulation for a model to learn useful behavior that can still transfer to the physical robot.\n\n" +
        "\n" +
        "A major focus of this work is understanding and reducing the domain gap between simulation and real-world observations. Reinforcement learning policies are trained in Webots using simulated sensor data and then evaluated on the real robot without relying on identical visual conditions. I use the platform to investigate how differences in appearance, lighting, textures, sensor characteristics, and environmental structure affect learned representations and control performance after transfer. The simulation is also used to test approaches for improving transferability, such as learning more robust visual features and reducing dependence on simulation-specific details. This provides a controlled framework for studying sim-to-real reinforcement learning and for developing models that can learn effectively in simplified simulation while remaining useful when deployed on real robotic platforms."
  },



];

// Edit PLATFORM_DATA only.
// The homepage slider and the Platforms page both read from this same file.
// Changing a name, image, or description here updates both locations.
