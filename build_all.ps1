$projects = @(
    "articulo_nihilista",
    "cv_nihilista",
    "footer_nihilista",
    "nihilismo_banner",
    "presentacion_nihilista",
    "semantica_nihilista"
)

foreach ($project in $projects) {
    Write-Host "Compilando $project..."
    cd $project
    npm install
    npm run build
    cd ..
}
