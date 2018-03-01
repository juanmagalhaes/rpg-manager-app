import React from "react";
import { GameManager } from "../GameManager";
import { initialState } from "../reducers";

const unlisten = jest.fn();
const props = {
  match: { params: { id: null } },
  history: { listen: jest.fn(() => unlisten) },
  game: initialState.game,
  newGame: jest.fn(),
  getGame: jest.fn(),
  saveGame: jest.fn(),
  changeGame: jest.fn(),
  deleteGame: jest.fn(),
  updateGame: jest.fn()
};
GameManager.prototype.unlisten = jest.fn();

test("GameManager renders with no path id", () => {
  const component = shallow(<GameManager {...props} />);
  expect(component).toMatchSnapshot();
  expect(props.getGame).not.toHaveBeenCalled();
});

test("GameManager renders with path id", () => {
  const newProps = {
    ...props,
    match: { params: { id: 1 } }
  };
  const component = shallow(<GameManager {...newProps} />);
  expect(component).toMatchSnapshot();
  expect(props.getGame).toHaveBeenCalledWith(1);
});

test("GameManager listen to route changes and calls newGame", () => {
  const component = shallow(<GameManager {...props} />);
  const { listen } = props.history;
  expect(listen).toHaveBeenCalled();
  const [callback] = listen.mock.calls[0];
  callback();
  expect(props.newGame).toHaveBeenCalled();
});

test("GameManager unmount", () => {
  const component = shallow(<GameManager {...props} />);
  const instance = component.instance();
  instance.componentWillUnmount();
  expect(instance.unlisten).toHaveBeenCalled();
});
