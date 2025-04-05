class UserDashboard {
  constructor() {}

  static htmlCard(name, board_id, repr, timestamp) {
    return `
      <div id="card-board-${board_id}">
        <hr class="divider" />
        <div class="card">
            <div class="card-content">
                <strong><p>${name}</p></strong>
                <p class="card-date">created on ${timestamp}</p>
                <button class="button secondary-button" onclick="gameCanvas.load('${repr}')">Load it!</button>
                <button class="button accent-button" onclick="handleDeleteBoard('${board_id}')">Delete</button>
            </div>
            <canvas width="150" height="150" id="board-${board_id}"></canvas>
        </div>
      </div>
    `;
  }

  addBoard({ name, board_id, repr, timestamp }) {
    const newBoard = UserDashboard.htmlCard(name, board_id, repr, timestamp);
    const boardsList = document.getElementById("user-boards");

    boardsList.insertAdjacentHTML("beforeend", newBoard);

    const canvas = new GameCanvas(`board-${board_id}`, {
      cellList: new Decompressor(repr).getCellList(),
    });
  }

  removeBoard(board_id) {
    const boardCard = document.getElementById(`card-board-${board_id}`);
    const boardCanvas = document.getElementById(`board-${board_id}`);
    boardCanvas.remove();
    boardCard.remove();
  }

  displayUserProfile() {
    this.hideForms();
    const userProfile = document.getElementById("user-profile");
    userProfile.classList.remove("hidden");

    const { username, boards } = authContext.user;

    const usernameElement = document.getElementById("user-name");
    usernameElement.innerText = username;

    const boardsList = document.getElementById("user-boards");
    boardsList.innerHTML = "";

    boards.map((board) => {
      this.addBoard(board);
    });
  }

  showLoginForm() {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
  }

  showSignupForm() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
  }

  hideForms() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.add("hidden");
  }
}
