export function getPeople(state) {
  return state.people.ids.map(id => state.people.byId[id]);
};

export function getPeopleForList(state) {
  return getPeople(state).map(man => {
    return {
      img: man.avatar,
      title: man.name.first + ' ' + man.name.last,
      subtitle: man.position,
      id: man.id
    };
  })
};
