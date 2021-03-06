export const DI = {
  registerCar: async plate => {
    const data = {
      plate,
      parklot_id: 1
    };
    return await fetch("http://54.224.12.242/add_parklot_car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  },

  exitCar: async plate => {
    const data = {
      plate,
      parklot_id: 1
    };
    const res = await fetch("http://54.224.12.242/exit_parklot_car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await res.json();
  }
};
