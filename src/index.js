import React from "react";
import ReactDOM from "react-dom/client";
import { v4 as uuid } from "uuid";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: "Monday" };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(selectedOption) {
    this.setState({ selectedOption: selectedOption });
  }

  render() {
    return (
      <div>
        <h1>GYM NOTES</h1>
        <Select
          selectedOption={this.state.selectedOption}
          onOptionChange={this.handleOptionChange}
        />
        <NotesHolder selectedOption={this.state.selectedOption} />
      </div>
    );
  }
}

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(e) {
    this.props.onOptionChange(e.target.value);
  }

  render() {
    return (
      <form>
        <label>What day is it:</label>
        <div className="select">
          <select
            name="days"
            id="days"
            value={this.props.selectedOption}
            onChange={this.handleOptionChange}
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
        </div>
      </form>
    );
  }
}

class NotesHolder extends React.Component {
  constructor(props) {
    super(props);
    this.addNewNote = this.addNewNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.state = {
      notes: [
        { date: "20.02.2023", id: uuid().slice(0, 8) },
        { date: "13.02.2023", id: uuid().slice(0, 8) },
        { date: "6.02.2023", id: uuid().slice(0, 8) },
      ],
    };
  }

  deleteNote(id) {
    let updatedNotes = [];
    this.state.notes.forEach((note) => {
      if (note.id !== id) {
        updatedNotes.push(note);
      }
    });
    this.setState({ notes: updatedNotes });
  }

  addNewNote() {
    let date = new Date().toLocaleDateString();
    this.state.notes.unshift({ date: date, id: uuid().slice(0, 8) });
    this.setState({ notes: this.state.notes });
  }

  render() {
    switch (this.props.selectedOption) {
      case "Monday":
        return (
          <div className="notes-holder">
            {this.state.notes.map((note) => (
              <MondayNote
                key={note.id}
                date={note.date}
                id={note.id}
                deleteNote={this.deleteNote}
              />
            ))}
            <AddNoteButton handleButtonClick={this.addNewNote} />
          </div>
        );
      case "Tuesday":
        return (
          <div className="notes-holder">
            <TuesdayNote date="21.02.2023" />
            <TuesdayNote date="14.02.2023" />
            <TuesdayNote date="7.02.2023" />
          </div>
        );
      case "Thursday":
        alert("2");
        break;
      case "Friday":
        alert("3");
        break;
    }
  }
}

class AddNoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.handleButtonClick();
  }

  render() {
    return <a className="addNote-button" onClick={this.handleButtonClick}></a>;
  }
}

class MondayNote extends React.Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote() {
    this.props.deleteNote(this.props.id);
  }

  render() {
    return (
      <div className="note">
        <DateComponent
          date={this.props.date}
          deleteNote={this.deleteNote}
          id={this.props.id}
        />
        <RunningExercise speed="6.0" incline="3.5" time="10 min" />
        <Exercise
          name="Squats"
          unit="kg"
          weight="30-40-50-50"
          reps="12-10-6-6"
        />
        <Exercise name="Hip Abductors" unit="lbs" weight="50-55" reps="20-15" />
        <Exercise
          name="Leg extension"
          unit="lbs"
          weight="55-60-65"
          reps="14-12-10"
        />
        <Exercise
          name="Seated Calf Raise"
          unit="kg"
          weight="25-30-35"
          reps="18-15-14"
        />
      </div>
    );
  }
}

class TuesdayNote extends React.Component {
  render() {
    return (
      <div className="note">
        <DateComponent date={this.props.date} />
        <Exercise
          name="Bench Press"
          unit="kg"
          weight="10-20-30-40"
          reps="12-12-10-5"
        />{" "}
        <Exercise
          name="Dumbbell Military Press"
          unit="kg"
          weight="30-40-50-50"
          reps="12-10-6-6"
        />
        <Exercise name="Hip Abductors" unit="lbs" weight="50-55" reps="20-15" />
        <Exercise
          name="Dumbbell Arm Raises"
          unit="lbs"
          weight="55-60-65"
          reps="14-12-10"
        />
        <Exercise
          name="Tricep Extensions"
          unit="kg"
          weight="25-30-35"
          reps="18-15-14"
        />
        <Exercise
          name="Жим вверх в тренажері(на куті біля бігових доріжок)"
          unit="kg"
          weight="10-20-20"
          reps="12-10-7"
        />
        <Exercise
          name="Tricep Extensions"
          unit="kg"
          weight="20-20-25"
          reps="14-12-10"
        />
      </div>
    );
  }
}

class ThursdayNote extends React.Component {
  render() {
    return (
      <div className="note">
        <DateComponent date={this.props.date} />
        <RunningExercise speed="6.0" incline="3.5" time="10 min" />
        <Exercise
          name="Squats"
          unit="kg"
          weight="30-40-50-50"
          reps="12-10-6-6"
        />
        <Exercise name="Hip Abductors" unit="lbs" weight="50-55" reps="20-15" />
        <Exercise
          name="Leg extension"
          unit="lbs"
          weight="55-60-65"
          reps="14-12-10"
        />
        <Exercise
          name="Seated Calf Raise"
          unit="kg"
          weight="25-30-35"
          reps="18-15-14"
        />
      </div>
    );
  }
}

class FridayNote extends React.Component {
  render() {
    return (
      <div className="note">
        <DateComponent date={this.props.date} />
        <RunningExercise speed="6.0" incline="3.5" time="10 min" />
        <Exercise
          name="Squats"
          unit="kg"
          weight="30-40-50-50"
          reps="12-10-6-6"
        />
        <Exercise name="Hip Abductors" unit="lbs" weight="50-55" reps="20-15" />
        <Exercise
          name="Leg extension"
          unit="lbs"
          weight="55-60-65"
          reps="14-12-10"
        />
        <Exercise
          name="Seated Calf Raise"
          unit="kg"
          weight="25-30-35"
          reps="18-15-14"
        />
      </div>
    );
  }
}

class DateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote() {
    this.props.deleteNote(this.props.id);
  }

  render() {
    return (
      <div className="date">
        <Input value={this.props.date} id={uuid().slice(0, 8)} />
        <DeleteNoteButton deleteNote={this.deleteNote} id={this.props.id} />
        <span></span>
      </div>
    );
  }
}

class DeleteNoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote() {
    this.props.deleteNote(this.props.id);
  }

  render() {
    return <a className="deleteNote-button" onClick={this.deleteNote}></a>;
  }
}

class Exercise extends React.Component {
  render() {
    return (
      <div className="exercise">
        <Input
          className="bold"
          value={this.props.name}
          id={uuid().slice(0, 8)}
        />
        <strong>:</strong>{" "}
        <Input value={this.props.weight} id={uuid().slice(0, 8)} />
        <SelectWeight unit={this.props.unit} />
        <Input value={this.props.reps} id={uuid().slice(0, 8)} /> reps
        <Checkbox />
      </div>
    );
  }
}

class RunningExercise extends React.Component {
  render() {
    return (
      <div className="exercise running">
        <Input className="bold" value="Running Track" id={uuid().slice(0, 8)} />
        <strong>:</strong> speed -{" "}
        <Input value={this.props.speed} id={uuid().slice(0, 8)} />, incline -{" "}
        <Input value={this.props.incline} id={uuid().slice(0, 8)} />, time -{" "}
        <Input value={this.props.time} id={uuid().slice(0, 8)} />
        <Checkbox />
      </div>
    );
  }
}

class SelectWeight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { unit: this.props.unit };
    this.handleUnitChange = this.handleUnitChange.bind(this);
  }

  handleUnitChange(e) {
    this.setState({ unit: e.target.value });
  }

  render() {
    return (
      <div className="select select-weight">
        <select value={this.state.unit} onChange={this.handleUnitChange}>
          <option value="kg">kg</option>
          <option value="lbs">lbs</option>
        </select>
      </div>
    );
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resizeInput = this.resizeInput.bind(this);
    this.state = { value: this.props.value };
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
    if (this.props.className === "bold") {
      e.target.style.width = e.target.value.replace(/ /g, "").length + "ch";
    } else {
      e.target.style.width = e.target.value.length + 0.25 + "ch";
    }
  }

  resizeInput(input) {
    if (this.props.className === "bold") {
      input.style.width = input.value.replace(/ /g, "").length + "ch";
    } else {
      input.style.width = input.value.length + 0.25 + "ch";
    }
  }

  componentDidMount() {
    let input = document.getElementById(this.props.id);
    this.resizeInput(input);
  }

  render() {
    if (this.props.className === "bold") {
      return (
        <input
          id={this.props.id}
          className="bold"
          value={this.state.value}
          onChange={this.handleInputChange}
        ></input>
      );
    }
    return (
      <input
        id={this.props.id}
        value={this.state.value}
        onChange={this.handleInputChange}
      ></input>
    );
  }
}

class Checkbox extends React.Component {
  render() {
    return <input className="checkbox" type="checkbox" name="checkbox" />;
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
