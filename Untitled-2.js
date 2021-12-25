exports.esVocal =char => "aeiou".includes(char);

exports.contarVocales =str => [...str].reduce(
    (memo, char) => (
        memo.hasOwnProperty(char)
            ? { ...memo, [char]: memo[char] +1}
            : memo
    ),
    {a:0, e:0, i=0, o=0,u=0},
); 