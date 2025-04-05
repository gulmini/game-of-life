const userDashboard = new UserDashboard();

const authContext = new AuthContext();

const apiContext = new ApiContext();

const gameCanvas = new PlayableGameCanvas(
  "gameCanvas",
  {
    cellList: [],
  },
  {
    startStopButtonId: "startStopButton",
    speedSliderId: "speedSlider",
  },
);
