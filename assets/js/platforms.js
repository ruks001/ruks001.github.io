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
    id: "Custom Robot",
    name: "Custom Robot",
    category: "Robot Platform",
    image: "assets/files/platforms/custom_robot.jpg",
    shortDescription: "Simulation environment used to develop and test robotic perception and navigation before real-world deployment.",
    description: "Use this section to describe how Webots is used for simulation-based development, testing, data generation, controller validation, and sim-to-real experiments."
  },

  {
  id: "F1tenth",
  name: "F1tenth",
  category: "Robot Platform",
  image: "assets/files/platforms/f1tenth.jpg",
  shortDescription: "Simulation environment used to develop and test robotic perception and navigation before real-world deployment.",
  description: "Use this section to describe how Webots is used for simulation-based development, testing, data generation, controller validation, and sim-to-real experiments."
  },

  {
  id: "Duckiebot",
  name: "Duckiebot",
  category: "Robot Platform",
  image: "assets/files/platforms/duckiebot.jpg",
  shortDescription: "Simulation environment used to develop and test robotic perception and navigation before real-world deployment.",
  description: "Use this section to describe how Webots is used for simulation-based development, testing, data generation, controller validation, and sim-to-real experiments."
  },

  {
    id: "Carla",
    name: "Carla",
    category: "Simulation Tool",
    image: "assets/files/platforms/carla.png",
    shortDescription: "Simulation environment used to develop and test robotic perception and navigation before real-world deployment.",
    description: "Use this section to describe how Webots is used for simulation-based development, testing, data generation, controller validation, and sim-to-real experiments."
  },

  {
    id: "webots",
    name: "Webots",
    category: "Simulation Tool",
    image: "assets/files/platforms/webot.png",
    shortDescription: "Simulation environment used to develop and test robotic perception and navigation before real-world deployment.",
    description: "Use this section to describe how Webots is used for simulation-based development, testing, data generation, controller validation, and sim-to-real experiments."
  },



];

// Edit PLATFORM_DATA only.
// The homepage slider and the Platforms page both read from this same file.
// Changing a name, image, or description here updates both locations.
