({
    mustDeps: ['i-bem-dom'],
    shouldDeps: [
        {
            elems: ['user', 'form']
        },
        'user',
        'alternative-translation',
        'form',
        'heading',
        { block: 'select', mods: { mode: 'radio', theme: 'islands', size: 'm'} },
        { block: 'button', mods: { theme: 'islands' } },
        { block: 'attach', mods: { theme: 'islands', size: 'm' } }
    ]
})
