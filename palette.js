const PROJECT = "atlas-color-palette-silk";
const PROFILE = "0005";
function run(value = 'ready') {
  return { project: PROJECT, profile: PROFILE, value };
}
console.log(run());
