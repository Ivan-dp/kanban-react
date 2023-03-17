const randomId = (name) => {
    return `${name}-${Math.random().toString(36).slice(2, 11)}`;
};

export { randomId };
