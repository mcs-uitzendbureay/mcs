$basePath = "C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\MCS\public"

Write-Host "`nGeoptimaliseerde bestanden:" -ForegroundColor Green
Write-Host "=========================="

Get-ChildItem -Path $basePath -Recurse -File | ForEach-Object {
    $size = if ($_.Length -gt 1MB) {
        "{0:N2} MB" -f ($_.Length / 1MB)
    } else {
        "{0:N0} KB" -f ($_.Length / 1KB)
    }
    Write-Host "$size`t$($_.Name)"
}
