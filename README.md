# [Website](https://p13rr0m.github.io)

This site is still under heavy construction

Build and test

```julia
julia --project

julia> using Franklin
julia> newsite(".", template="Lanyon")
julia> serve()

julia> using NodeJS
julia> run(`sudo $(npm_cmd()) install highlight.js`)
```
