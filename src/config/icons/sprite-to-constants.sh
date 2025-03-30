parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

cd "$parent_path"

grep -E "\"name.*" selection.json | grep -v "icomoon" | awk '{gsub("\"","",$2);print "export const I_" toupper($2)"=""\""$2"\";"}' | tr ',', ' ' | awk '{gsub("-","_",$3);gsub(" \"","\"",$0);print $0}'>./constants.ts