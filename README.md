# [Website](https://p13rr0m.github.io)

This site is still under heavy construction

Initialise

```julia
julia --project

julia> using Franklin
julia> newsite(".", template="Lanyon")

julia> using NodeJS
julia> run(`sudo $(npm_cmd()) install highlight.js`)

julia> serve()
```

Build and test

```julia
julia --project

julia> using Franklin
julia> serve()
```

Created with [Franklin](https://franklinjl.org/)
