// @flow

export type RouterInjectedProps = {
  match: {
    params: {
      gameId: ?number,
      characterId: ?number
    }
  },
  history: {
    listen: Function,
    push: Function,
    go: Function,
    goBack: Function
  },
  location: {
    pathname: string
  }
};
