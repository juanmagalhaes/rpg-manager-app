// @flow

export type RouterInjectedProps = {
  match: {
    params: {
      id: ?number
    }
  },
  history: {
    listen: Function,
    push: Function,
    go: Function
  }
};
