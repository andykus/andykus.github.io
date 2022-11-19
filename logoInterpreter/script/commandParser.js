const CommandDefinition = {
    [SET_PEN_SIZE]: { parameterized: true },
    [TURN_LEFT]: { parameterized: true },
    [TURN_RIGHT]: { parameterized: true },
    [FORWARD]: { parameterized: true },
    [BACK]: { parameterized: true },
    [PEN_UP]: { parameterized: false },
    [PEN_DOWN]: { parameterized: false },
    [HIDE_TURTLE]: { parameterized: false },
    [SHOW_TURTLE]: { parameterized: false },
};


class Command {
    constructor(type, argument) {
        this.type = type;
        this.argument = argument;
    }
}

const unnestRepeats = (inputText) => {
    const repeater = (_, iterations, value) => {
        return (value + ' ').repeat(iterations).trimEnd();
    };

    const unnested = inputText.replace(/repeat (\d+) \[([^\[\]]+)\]/gmi, repeater);
    
    if (unnested === inputText) {
        return unnested;
    }

    return unnestRepeats(unnested);
};

const parseCommands = (inputText) => {
    const withUnnestedRepeats = unnestRepeats(inputText);

    const tokens = withUnnestedRepeats.split(' ');
    const commands = [];

    for (let i = 0; i < tokens.length; i++) {
        const cmd = CommandDefinition[tokens[i]];

        if (!cmd) {
            break;
        }

        if (!cmd.parameterized) {
            commands.push(new Command(tokens[i]));
            continue;
        }

        if (!tokens[i + 1]) {
            break;
        }

        commands.push(new Command(tokens[i], parseInt(tokens[++i], 10)));
    }

    return commands;
};