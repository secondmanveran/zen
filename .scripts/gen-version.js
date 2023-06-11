import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const packageJsonPath = resolve(__dirname, '..', 'package.json')
const packageJsonData = readFileSync(packageJsonPath, 'utf-8')
const packageJson = JSON.parse(packageJsonData)
const version = packageJson.version

const versionFilePath = resolve(__dirname, '..', 'src', 'version.ts')
const versionFileContent = `export default '${version}';\n`

writeFileSync(versionFilePath, versionFileContent)
