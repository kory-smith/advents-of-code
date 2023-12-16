const testInput = `
.....
.S-7.
.|.|.
.L-J.
.....`;

const clutteredTestInput = `
-L|F7
7S-7|
L|7||
-L-J|
L|-JF`;

const input = `
L-|---|.F--F7F-.FF-F-7FL|.F7.FF|7FL7.JF7F7-F..FF-777-7F|-7.FF--F7FL-7-|7F|7--J.F-7-|-F77.F-FL-L.F--|.L77-J-7-FF-7F|---7F77F|7F-|-L-7-F7..FF-
|7.|77L7LL7|7|J-F-7J.--7|7-FF-7|LJ-77L7LFJ|JFFFJ7|7FFL7L7|F777.7LJ.LJ.||7JF7|L-|LF7.FFJ-7.L|LFJF7LFF--||J|JF-F7.|7JF|.|-LLLF77||.|.|F|F7J-LJ
7J-JL7--JLLJ7J|.L-7F-J.J|J.LJLJFFL7|JFJLJ---7-LJF7-FLL7--FJL77F7-|7|L-7L|FJ-JJ7L--J-7J.FJ.FJ-L7LF-J|7.-J.J7LLLJ7FF--7.J-L.LJJL7J--|-FJFJ|J||
7.7J.L|JF|FJ|L--J.|FJF7-F-7.LF.FL7.7J|.7|7|L7|.|.LFJ7.|LFL-7L77|FF77..F---L.|FJ--J7LJ|LL.|....7L|.7-F.|FJF7.||L-F|-.F-J7|F.FFL7|J-JL7-7-|-F-
L7L|-F|JL7LLL.L|7F7J.-J-JJ777L-F.|F7J.|LJ-J.||-F7--|FJ7.||FL7|F-7|L7JFLFJFLF-J.FL-JLLFJ7FJ.FF7L7|FJJL|7L-FF-L7LF-J.-L|JJF|7FF-7J-FL--7J.LJ|.
7JF7-F77.|FFLJ7FJJJ-LL7J7LF-7|7|F|.|.F|7JFJ-J.F7|-LF7-||J7F-J||FJ|FJF7FF----7|7JLJJ.|L-|7L|7LL-J|FF-JJFJ|JLJJLFL-J7|FJJFJJ-7.--J-77JFL.FJ7|.
L|JJL|LJFL-JJF-7JL--J||L7FJ.L7|L|.-|F-7L-F-7-L-F-7||L--7LFL-7|||FJ|F---7-J||.L-.L77.L7|L-JL7F|.|LFJJFLLFL..|F7FJ77LFL|F-J7J.|LF77L7.L.LJLJ-F
-L7F--7-|JF|||F777..FLJ7L|-JL-7|LFL|-LLJ7LFF.|LL7L7|F--J.F7FJ|||L7LJF7FJ7J-J7||7JF-F-|J-|7FF-7J7L-JL|.L|L|7|FL|LF7L-.L7JFFJ.L-FJ-FJ-LF.7-|.7
|.|7.|F--7|LFF|JJFLF7LL7-L..|L|J.FJ.L.|.F---7.|.L7LJ|LF7FJ|L7LJL-JF-JLJFJ7FL--F7F.F..J|-F-FJ|.|L7-7|LJ7F---JJLL7JJ.LFJ|F|7J7.LLJ||-.LLFF-|.-
F|.-.F7.|.7-7|J|FFF|J7J|.LF-JJLLFJF--FJ.L-7FJ77||L-7L7||L7|FJF-7F7L-7JJ-|F-F7.LL.LFL-7|-|J|77F|7|7L-7JF|77FJJ7L|.77..F7-LF.F7L|-|J.F--F7.L7J
L7LL7JF77|J7L7-JL--J.FJF--J-7J7LFJ|..7|.|FJ|F7F7F7F|FJ|L-J|L7|7LJL--J|F7.|-J|FJ7|F|J.||||LJ-7-J-LF-7LJF7F7J7.FFJ-|F77FJLF--L-7--J.77|JLJF7LL
L|.F-7LF-JL|J||7LL7LFJLJJLJ-7L7L||LJ-7-FFL7|||||||FJL7L--7L-JL------7-|L-7.LJJ.J7-7-7||-|7.||J..L|FL--7L-|.F7LFJ|F-JFJJLF.L-J||LF-|JJ.L7JLJ7
.L-|J7FJ-JJ|L--F7LL-|-FJ.|FFJFF7-J-|.|FF|J|||LJ||||F-JLF7L-7F---7F--JFJF-J-|FF7LLJLF.LJFF7.F7.F7.FJF|J|77LFF--77-JL-7.|.L.J-LJJ|JF|.F-.FJ|.7
F|LFF---LJ.|-|L|FF7-JL77-FF7F7||L||L7LF---J|L-7||||L7F7|L--JL--7LJFF7L7|F7|L-L|J-7.|F|7L|L7||FF|F||7F.FJ-F7L7FJJL7-LJ-|7-77FJJF7.7JF||.L7J.J
FJFJ|J77.FFJJ.-7-J777L||F-J||LJL-77.|JL---7|F7|||LJFJ||L--7F---JLF7||FJLJL-7J7JLFF7-F77.L7LJL7F7JJL-FF7FFJ|FJ|F77F77.||LFF7-7.|J-|-|7|7.J7-L
L-F--J|7J-LJJ-LL-7.LL-FLL7FJL7F--J|F77F7F7|||LJ|L7FJFJL7F7|L7F7F7|||||F----J.LF-7||.||F7FJF-7|||F|.|L||FL7LJFJ||FJL7-F7FF|||F----|-LJL|-|7.|
|.|F|.LLJ---F-J|J-7F|..|FJL-7|||.LFJL-J||LJ||F7L7|L7L-7LJ||FJ|||LJ||LJL7F--7.|L7LJL7||||L7L7LJ||F7.F7||F7L-7|L||L-7|J||F7||7-.---7-LJ7L-|7.F
L77J.FF-JLL-|LF|7FF|7-F7L7F7LJL77JL---7||F-JLJ|FJ|FJF7L-7||L7||L-7LJF7FJ|F-JF7JL--7|||||FJFJF-JLJL7|||||L7||L-J|F-JL-JLJLJL7J7-FL-.|-|7.|--|
||LF7FF-7.|-F77|F-7L|L||7LJL--7L7FF7F-JLJL-7F7|L7||FJ|F7|LJFJ|L7FJF-J||FJ|F7|L7F7||||||LJFJLL---7FJ|||LJFJFJF--JL---7F--7F-JJ7-L|L|7.F|.|J-J
7-|LLLL-JF7-|L7FJFJ-JJ|L-7.F77L7L7||L-7F-7FJ||L7LJ|L7||LJF-J||FJ|FJF7LJL7LJLJFJ||FJLJLJF-JF7-F7FJL-J|L-7L7L7|F7|F-7FJL7LLJ7|FJ|FJ-JJ-L.JJ7F7
LL77.|7JFF7|L7|L7L7LJ.L-7L7|L-7|FJ||F7||FJ|FJL7|F7|FJ||F-J7F7||.||FJL77L|F---JFJ|L--7F-JF7|L7||L7F--JF-JFJFJLJL7|FJ|F-JF-7-7|FFJJLL7L|.LF7|7
F-J|L77-FJL-7||JL7L7LF-7L7|L-7LJL7||||LJL7||F-JLJ||L7||L7F7||||FJ|L-7L7FJL7F-7|FJF7FJL-7|LJFJ||FJ|F7FJF7||L7F--J||FJL-7|FJ7|7-F.|.L7F|.FLJLJ
LJ-|J||-L-7FJ||JFL7L7|FJFJ|F7|F-7|||||F-7|||L7F7FJ|FJLJFJ|||||||FJF7|FJL7FJ|FJ|L-JLJF--JL7FJ|||L7LJ|L-J||F7|L--7||L-7FJ|||FF7F7F7-J|LLLL.-.J
||FJL|7JF-J|FJL7F-JFJ|L-JFJ||LJFJ|||||L7LJLJFJ||L7|L7F-JFJLJ||LJL7|||L7FJ|FJL7L----7L7F-7||F7||FJF-JF7FJ||||F-7|||F7|L-JL--JLJLJ|L-|7|FJFF-L
7-|FLLJFL-7|L7FJL-7L7L--7|FJ|F7L7||||L7L--7FJFJL7||-|L7FL7F7|L7F-J|||FJL7|L7FJF7F7FJFJ|FJ|||LJ|L7L7.||L7||||L7LJ|||LJF----7F---7L7.J-LJLF7JJ
L7L|-J|.F-JL-JL7F7|FJF--J||FJ|L7|LJ|L7|F7FJL7L-7LJ|FJFJF7LJ|L-JL--JLJL7FJL-JL7|||LJFJF|L7||L-7L7|FJFJ|FJLJ|L7L-7|LJF7|F7F7|L--7|FJ.|-||7|LL7
L-7L-LF-JF7F--7||||L7L7F7|||.L7|L-7L7|||||F7L-7L7FJL7L7|L7FJF7F7F-----JL7F---J||L-7L-7|FJ||F7L7LJL7L7|L7F-JFJF-JL7FJLJ|LJ||F7FJ||JF|-L|7|-LF
7.J-FF|F7|LJF-JLJ|L7|JLJ|||L7FJL-7L7LJ|||LJ|F-JFJ||FJFJL7|L7|||LJF7F7|F7||F7F7||F-JF-J||L|||L7L--7L7||F||F7L7L-7FJL---JF-J||LJ.LJ.|7..LFF7.|
||J.LFJ|LJF7|F7F7L-J|F7FJ|L7|L--7L7|F-J|L7FJL7FL7L-JFJF-J|FJ|LJF-J||L-JLJ|||||||L-7|JFJL7|||FJ-F7L7|||FJ|||FJF7LJF-7F--JF7LJF7FLJ..JFJ7LF7-J
J7.77L-JJL|LJ|LJL7F7LJ|L7|FJL-7FJFJ||F7L7LJF7|F7|F7FJ-|F-JL7L7FJF-JL--7F-J||||||F7|L-JF7LJ||L7FJ|FJ||LJFJ|LJFJL--JFJL---JL--JL-7J.LLL|7|LJL7
|L7|F7L7|.L--JJF7LJL-7L-J|L7F-J|FJFJ|||LL-7||LJLJ|||F-J|7F7L7||FJF7F7FJL7J|||||||LJF7FJL--JL7|L7LJFJL7FJ||F-JF7F7|L----7F7F-7F-J77.|FJ-|-|.J
FL7FJ|J-L-F---7|L--77L7F7L7||F7|L7L7||L7F7LJL--7FJLJL7FJFJ|FJ|||FJLJ|L-7L7|LJ|||L--J|L-7F7F7|L7L-7|F7|L7FJL--J||L7FF--7|||L7|L-7F7-J7|LL-J-L
F-7LLL-7JLL--7||F-7|F7LJL7LJ|||L7L7|LJFJ||F77F7|L-7F7||LL7LJFJ|||F--JF-JFJL-7|||FF77|F-J||||L7|F7|LJ|L7||F----J|FJFJF-J||L-JL--J||7.L--7|J7|
||JF-7FJJLLF-JLJ|FJLJL7F7L-7LJL7|FJL7FJFJ||L7||L-7|||||F7L-7L-J|||F-7L-7L7F7||||FJL7||F7||||FJ||||F-JFJ|||F7F7L|||L7L-7||-F-7F--JL-7.J7||F-L
JJ|L-F7-FLLL-7F7|L-7F7LJL--JF-7LJ|F7||7L7||FJ||F7||||||||F7L7F-J|||FJF7|FJ||||||L-7|||||||||L7|||||F7L7||||||L7||F7|F-JLJFJFJL-7F7FJ7-FL.L.J
|F-LF7JLL7.||LJLJ7FJ|L--7F7FJFJF7LJLJL7FJ||L7|||||LJ||||LJL7|L-7|||L7|||L7|LJ||L7FJLJ||||||L7||||||||FJLJ|||L7LJLJLJ||F7FJFJJF-J|LJ7J.|L7F77
|.-7...7J-FF---7F-JFJ|F-J|||JL-JL----7|L7||FJ||||L7FJ|||F--JL-7LJ|L7||LJFJL-7|L7|L7F-J|||||7||||||LJ||.F7LJL-JF-----JFJLJFJ|JL7FJF77.L|.F-J|
LF|7-FJJ.|LL--7|L--JF-JF7|||F---7F--7|L-JLJL7||||FJ|FJ|||F-7F7|F-JFJ|L7|L-7FJ|FJ|FJL-7|||||FJ||||L7FJ|FJL--7F7L------JF-7L-7F7||FJL7JFL7J.F7
FF7F7L.FFF----JL--7FJF7|LJ||L7F7LJF7|L7F7F7JLJ||||FJ|FJ||L7|||||F7|FJFJF--JL7|L7|L--7LJ||LJ|FJ|||FJL7|L7F-7LJL7F------JLL--J|LJLJF-JL7JJ|FL|
F|JJ7|-F7L---7F7F7LJFJLJF-J|FLJL--J|L-J|LJL-7FJ|||L7|L7||FJ||LJ||||L-J-L7F7FJ|FJL7F-JF-JL-7LJFJ||L7FJL7LJFJ.F7|L---7F----7F7|F7F7||-7LLFJJFJ
||JL-F7LFF---J|LJL7FJF7FJF-JF7-F7F-JLF-JF---JL7|LJFJL7||LJFJL7FJ||L7F-7|LJ|L7LJF7||F7L-7F7L-7L7||FJL--JF-JF7||L----J|F7F7LJLJ|LJLJ---J|..||J
L77-L||F7|F---JF--J|FJLJFJF-JL-J||F--JF7L----7||F7L7FJLJF-JF7|L7|L7||FJF--JFJF7||LJ||F-J||F-JFJ|||F-7F-JF-JLJL------J|LJL-7F7L--77L|7|F7-7LJ
|L7.|||||LJF-7-L7F7|L7F7|FJF7F-7|LJF--JL-7F7FJ|||L-J|F--JF7|LJ|||.LJ|L-JF-7L-JLJL--J|L-7|||F7L-JLJ|FJL--JF7F7F7F--7F7L7F77LJL7F7L-77F77L|L7J
FJ|FF||||J-|FJFFJ|LJJLJLJL7|||FJL-7|F7F-7||LJFLJL-7FJL7F7|||F--JL-7JL-7FJFJF-7F7F7F-JF-J||LJL7F-7FJL-7|F-JLJLJ|L-7LJL7LJL---7LJL-7|J-JFFJ-77
.FFLFJLJ||7||F7L-JF--7F7F-J|LJL--7|LJLJFJ|L------7||F-J|LJ||L-7F7FJF--JL7L7|7||LJ||F7L7FJL7F7|L7LJF-7L7L--7F-7L-7L--7|F7F---JF7F7LJJJ-LJFLF7
|-JFL--7L--JLJL--7L-7LJ|L--J-F---JL----JLL-7F----J||L-7|F-JL7FJ|LJLL7F-7|FJL7|L-7|LJL7|L7FJ|LJJL--J7L7|F7FJ|FJF7|F--JLJ|L-7F7|||L7|7..F--.LJ
|FFL.LFL--------7|F7L-7|F---7L--7F--7F7FF-7|L-7F--JL7FJ||F7FJL7L7F--J|FJ|L7FJL7FJL7F-JL-JL7|F--------JLJLJFJL-J|LJ|F7F7|F7LJ||||FJ7F-77L|7LL
LF77-FF---7JF7F7||||F7||L--7L-7FJ|F-J||FJFJL7FJL7F7FJ|FJ|||L7FJFJL7F7||FJFJL-7|L7FJL--7F7|LJ|F-7F7F--7F--7|F---JF7FJLJ||||F7LJLJL--JFJ-7|J|.
L|L---JF-7L-JLJLJLJ|||||F7JL-7|L-JL7FJLJFJF7LJF7LJ||FJ|FJ||FJL7|F7||LJ|L7|F7FJ|FJ|F7F7LJL-7JLJJ||LJF7LJF7LJL7F--JLJF7FJLJLJL7F7F---7|.FLJ-F7
|L7F7F7|FJF-------7LJLJLJL---JL7F-7LJF-7L-JL--JL-7LJL7|L7|||LFJLJ||||FJFJ||LJFJL7|||||F---JF---JL7FJL--JL--7LJF7F--JLJJ-F7FFJ||L--7LJ-|7|.||
|7||LJ||L7|F------JF7F7F---7F-7||FJF7L7|F----7F-7L--7LJFJ|||FJF7FJLJFJFJF||F7|F7|LJ|||L--7FJF7F--JL-------7|F-JLJF--7F7FJL7L-J|F--JF77FL7L-J
L-||LFJ||LJL---7F-7|||LJLF7LJFJLJL-JL-J|L---7LJFJF--J7FJFJLJL-J||..FJFJF-J||LJ||L7LLJL7F-J|FJLJF----7F7F7FJLJF---JF-J|LJF-JF-7LJF--JL-7L--J|
LLLJLL-JJJF----JL7LJLJF--J|F-JF7F-----7|F--7L-7L7L--7FJFJF-----JL7FJFJ7L-7|L7FJ|FJF-77|L7FJ|F--JF7F7LJLJLJF7J|F---JF7|F-JF7L7L--JF7F--J|F-JF
||FJ777||7L---7F-JF--7L--7LJF7|||-F---JLJ-FJF-JLL---JL7|FL----7F7||FJ.F--J|FJ|FJL7|FJFJFJ|FJL---JLJL-7F7F7||FJL---7||||F-J|FJF7F-J|L7-JF||.-
LJ|.FFLLF-----JL7.L-7|FF-JF-JLJ|L7L7F7F7F7L7L7F7F7F7F7||F-----J|LJ|L-7L--7||FJL-7LJL7L7L7LJF---------J|LJLJLJF---7LJ||||F-J|FJLJJL|FJLLJ-|-J
L7LJLJJ|L-7F7F7FJF--JL7L--JF7F7L-JJLJLJLJ||L-J|||LJ|||LJL---7F7|F-JF7|F--J|||F--JF7FJLL-JF7|F---------J.F----JF7JL-7LJLJL7FJL--7JL||J7J77|7|
.|7LJ.-|.LLJLJLJ|L---7L----JLJL-7F-------JF7F7|||F-J|L7F7F7JLJLJL7FJLJL7F-JLJL7F-J||F----J|LJF-----7F7F7L-----JL--7L7F7F7LJF7F7|LLLJJ-777.-F
LJFFL|-L77|F-7F--7F--JF7F------7|L---7F--7||||||||F-JFJ|||L7F7F--JL-7F7||F----JL7FJ|L----7L7FL----7LJLJL7F7F--7F--J7LJLJL--JLJLJ-7FFJ7LJFF-7
FFL-F7.FFF7|FJL-7||F7FJ||F-----JL----J|F-J|||||||||F-JFJLJFJ||L-7F7FJ||LJL----7FJ|FJ-F7F7L7L--7F7FJF---7LJLJF7LJF7|F7F7F---7F7F7||-|J7LLLJ7|
7-7|||FLFJLJ|.F-J|LJLJ-LJL-7F-------7FJL--JLJLJLJLJL-7L--7L-JL7.|||L-J|J.LF---JL7LJF-JLJL-JF-7|||L-JF-7L----JL-7|L7|LJLJF7FJ|LJL7|.7-7J|FJ-7
L|L7FL-|L--7L7|F7L-7F7F7F7FLJF7F7F--J|F--------------JF7FJF-7FJFJ||F--J-7FJF-7F7L7F|F7F7F--JFJ||L7F7L7|F-------JL7LJF-7FJ|L-JF-7L-7-7--J|.L|
FJ.F7|F7FF7|FJLJL-7LJLJLJ|F-7|LJ||F--JL----------7F--7||L7|FLJ.L7|||L|J--L7|.||L7|FJ|LJLJF-7L7||FJ|L7||L------7.FJF7L7|L7L-7FJJL--J||J|7LJ|L
|LFJL7F7FJLJL-7F7FJF----7|L7|L-7|LJF---------7F--J|F-J|L7|L7F7F-J||L-777||LJFJ||LJL7|F--7L7|FJLJL7L7||L----7F7L7|FJL-JL-JF7LJF---7F7J---7-|J
|-L-7|||L---7FJ|LJFJF---JL-JL--JL--JF-----7F7LJF7.|L-7L7LJFJ||L-7||F7|-7J7JFL-JF-7-LJL-7L-JLJF7F7L-JLJF7F7|LJL-J|L-7F-7LFJL7FJF-7LJ|LLL7JF|.
L|LL||||F-7FJL7L-7|-L--------7F7F7F-JF7F-7LJL77|L-JF7L-JF7L-JL-7||||||7F7J-7J.|L7|F7F7FL--7F-JLJL-----J||L7F7-F7|F-J|FJFJF7LJFJ-L--J..JFF7J7
|LF-J|||L7|L7FJF-JL7F---7F--7||||||F-JLJFL7F7L-JF--JL--7|L7F7F-JLJLJLJ-.LJJ.L--FJLJ|||F-7FJ|F-----7JF7FJ|FJ||FJLJL--JL-JFJL--J7FL||L-|L-L---
J||F7LJ|FJ|L||7L---JL--7|L-7|LJLJLJL-7F7F7LJ|F-7L-----7|L7|||L--7JL7J77.|77..||L--7|||L7LJFJL7F7F7L-JLJFJ|FJ|L7F-7F-7F--JF-----7LF7J.L||L77|
FLLJL-7|L7|FJL7F-7F-7F7||F-JL--7F7LF7LJLJ|F7LJ.L------JL-JLJL7F-J7LJLJ--LL-7-F--7FJ||L7|F7|F-J|||L---7FJLLJFJL||.LJFJL---JF-7F7|FJL77F-||L|7
||L-F-JL-J|L7FJL7|L7LJLJLJF---7LJL-J|F7F7||L-7F7F-------7F-77LJ|FJJ.7|7LL7.F.L7FJL7||FJLJLJL--JLJF---J|F---JJFJL7F7L-7F-7FJLLJ|LJF7L77J|L.|L
|-|JL7F--7L-JL7FJL-JF7F7F7|F-7L-7F-7LJLJ|||F-J|||F------JL7|F-7F7.|F-7J.LF-F--JL--J|||F-7|F7F7F7FJF7F7|L---7FJF7LJL-7LJFJL---7|F7|L7L7-F-|7.
|.7.FLJF-JF--7LJF-7FJ||LJ||L7L--JL7L-7F7LJ||F7|LJL7F7F-7F7|||FJ||7-7J.|.L|L|F7F-7F7LJ||FJFJLJLJLJFJ||||F--7LJFJ|F-7FJF7L--7F-J||LJFJFJ7|7-77
FF7FF7FJF7L-7|F7L7|L7LJF-JL7L7F---JF-J|L--JLJLJF-7LJLJFJ|||||L-J|LF|LLF-F-7LJ||FJ|L-7LJL-JF7F7F7FJJLJ|||F7L-7|7LJJ|L-JL--7|L-7|L-7L7L7-|J|..
FJL-J|L7||F7|LJL-JL-J|FJF7FJLLJF7F-JF-JF-7F7F-7|7L----JL|LJLJF-7L-7-7.--J-JJJLJL7L7|L-7F-7|||||||F--7LJLJL-7LJF7F7L----7FJL--J|F-J|L7|-LF|FJ
L---7L-J|||||F--7F-7F7L-J|L7F--J|L-7L7FJL|||L7|L-------7|F7F-JJL--JJJ.|.L77|FF--JFJ-F-J|7LJ||||LJL-7|F7F7F7L--JLJL7F7F7LJF---7LJF-7LLJ.F|LLJ
F---JF7FJLJLJL-7|L7|||JF7|FJL--7|F7L-JL-7|||FJL--7F-7F7LJ||L77F7LJJ.L7J..FFF-JF7FJ-LL-7|F--J|||F--7|LJLJLJL--7F7F7LJLJL-7L7F7L--JFJF-7J7||J|
L7F7FJ||F------JL-JLJL7||LJF---JLJL-7F--JLJLJF--7LJFJ||F7|L7L-JL7|F77JLF-F-JF-JLJF7.F7LJL7F-JLJL-7LJF7F-----7LJLJ|F7F7F7|FJ||F7F7L-JFJ|LJ77L
LLJ|L7||L7F7F7F7F----7||L-7|F7F-7F-7LJF7F7F7FJF7L-7L-J||LJF|F7F7L7L|7FF7-L--JF---JL-JL---J|-F7F7FJF7|LJFF-7FJF-77LJLJ|||LJFJ||||L---JJJJF-J|
L-FJFJ||FJ|||LJ||F---JLJF-JLJLJ-LJFL--JLJLJLJFJ|F7L-7FJL--7LJLJL-JFF7-J|F|-|LL--7F--7F7F7FJFJLJ|L-JLJJF7L7LJ||FJF7F7.|||F7L7LJ||J7|.|JLJLFFJ
|FL-J|LJ|FJ||F7LJL7F7F-7|JF7F7F---7F7F7F-----JF|||F7|L7F-7L-----77FJ||JLJLF-JLF7LJF7||LJLJ.L7F-JF-----JL7L---JL-JLJL7LJLJL7L7FJL-7|.L--F-F-J
|LL7.J.LLJ-LJ||JF7LJ||FJL-JLJ|L--7LJLJLJJF7F7F7LJLJ|||LJFJF-7F7FJFJFJ--|7.-JFF|L--J|||F-7F7FJL-7L-----7FJF---------7L----7L-JL---J-.-J||7LL.
F7LL|F-.F7-F-JL-JL7-LJL----7FJ7F7L----7F7|||||L77F7LJF7LL7L7LJ|L7|FJJJ|F7F|.|LL---7|LJL7LJLJF--JF-----JL-JF7F7F---7L-----JF----77J7FL7F-77FJ
LL-L-7-FJL7L-----7|F-7F----JL-7||F7F--J|||LJLJFJFJL7FJL7LL7|F7L-J||.|-FJL7F--7F7F-J|-F7L7F7FJ-F-JF--------JLJ||F-7L---7F7|L7F--J7.J7|F7|LL7L
7FF.|F-L-7L7F----J|L7|L------7LJLJ||LF-JLJF--7L-JF-J|F-JF7LJ|L7F-JL-7FJF7|L-7|||L-7L-JL7LJ||F7L--JF---7F-----J||-L--7FJ||F7||F7F77-F7FLL---.
FFJF||.F7L7|L----7L7||F7F7.F7L---7|L-JF7F7L-7L7F7L--JL--JL7L|FJL--7FJL-J|L7FJ|||LFJF---JF-JLJL7F-7L--7|L------JL7F-7|L7|||||LJLJ|7FJJ|J7||J.
LL-JF-F|L-JL----7L7LJLJLJL-JL----JL--7||||F7L7||L-7F7F7F-7L-J|F-7-|L7F7.L7LJFJ|L7L7L--7|L-7F7FJ|FJF7FJL-7F--7F-7LJFJL-J|||||F---JF7JL--L----
L7|7L7|L-7F--7F7L-JF-----7F7F------7JLJ||LJL7||L-7LJLJLJFJF7FJL7|FJFJ|L-7L7FJ||FJL|F--JF--J|||-||FJLJF-7LJF7|L7L--JF7F7|LJLJL--7.|L7.|F7-L|7
|L-L7-FF-J|F-J|L--7|F----J|||F----7L--7|L--7LJ|F7L77FF7-L-JLJF7|||FJFL-7L7|L-7|L7FJ|F77L---J|L-JLJF-7L7L--J||FJF---JLJLJF------JFJFJJ7L7FF77
JJ.FFJ|L--JL-7|F--J|L7F7F-J||L-7F7L---J|F-7|F-J|L7L7FJL-7F-7FJLJLJL7F7-L7||F-JL7|L7LJL7F7F--JF----J-L-JF7F7|LJFJF-7F7F-7|F------JFJ|L77|LLJ|
L---F-7LF7F-7||L7F7|FJ|||F-J|F7LJ|F-7F7LJLLJL7FJFL-JL7F-J|FJL-----7|||F-J||L-7FJL-JF7FJ||L---JF7FF7F-7FJLJLJF-JFJ-LJLJJ|LJF--7F-7||-FJFL7LF|
|.|LL7L7|LJFJLJ-LJLJL7|LJL--J|L7|||FJ||LF7F7J|L7F----JL7||L--7F-7FJLJ|L-7|L7FJL---7|LJFJ|F7F--J|FJ||FJL-----JF-JJF----7|F7|F7|L7|L7.LFL|7.F|
|-JJFL7|L7FJF7FF7JF--JL7F7.F7L7|FJ|L-JL7|LJL7L-J|F---7FJFJF--JL7|L--7L--J|FJ|F7F--JL7FJFJ||L--7|L7||L7|F----7L---JF7F-JLJ||||L7||FJ7FJ.FJFJJ
-JFF--JL-JL-J|FJL-JF7F7||L-JL7|LJFJF--7LJF7FJF-7LJLF7|L7L7L-7F-JL7F7|F--7|L7LJ|L-7F-JL7||||F--JL-JLJFJFJF--7L-----J||F7F7LJ|L7||||.7JF-|.F|7
|LLL7F7F7F7F7LJF--7|LJLJL---7|L--JJL-7|F7|LJLL7|F--J|L7L-JF-JL--7|||LJJFJL7L7FJF-JL-7FJ|FJ||F7F--7F7L-JFJF-JF7JF--7LJ|LJL7FJFJLJLJ--.L.L7.F7
F7LLLJ||LJ|||F7L7FJ|F-7F7F--JL-7F7F--J||LJ.F7FJ||F--JFJF--J|F-7FJ|||.F-JF7L7|L7L--7FJL7||FJLJLJF7LJL--7|FJF7|L-JF-JF7|F--JL7|F7LF-77.|7F|.LF
LJFLF-J|L|||LJL7|L-J|FJ||L----7|||L--7||F--JLJFJ||F-7|FJ-F-7|FJL7||L7L--J|FJ|FJF7FJL7FJ|||F7F--JL7F7F7LJL-JLJF--JF-JLJL-7F7|LJL7L7L---7J77FF
..|JL--JF-J|F--J|F--JL-J|F-7F-JLJL7F7||LJF7F--JFJLJFJ|L-7L7||||FJLJFJF-7FJ|FJ|FJLJF-JL7LJLJ|L---7LJLJL------7|F-7|F-----J|||F-7L-JF---JF|JJ|
FF-F7|LLL-7|L---JL7F7F-7|L7|L-7F-7LJLJL7FJ|L7F7L--7|7|F-JFJLJL7L--7L7L7|L7LJFJ|F7FJFF7L7F--JF-7JL--7F-7F--7-LJL7LJL------JLJL7L7F-J.|7L-L--F
-J|JF7L--L|L7F----J|||FJL-JL-7LJ7L---7-LJ.L-J|L-7FJL-JL77L7F--JF-7L7|FJ|-L7FJLLJ||F7|L7|L7F7|FJF---J|FJ|F-JF---JF-7F7F---7F7FJFLJF7FJ-L.|F||
L-7LF-.L7-L-JL7F---JLJL7F---7L-------JF7FF--7L-7|L--7F-JF-JL--7L7|7||L7|F7|L7-F7|||||FJ|FJ|||L7L7F--JL7|L--JF7F7|F|||L--7||LJF---J|--J-F-F7J
LJL-L7FFL-7|LLLJF7F--7FJL--7L----7F7F7|L7L-7L-7||7F-J|F-JF7F--JJ||FJ|FJ||LJFJFJ||LJ|||FJL-J||FJFLJF-7FJ|F---JLJ|L7||L7F-JLJF-JF---J77..|.|||
..|J-LF||||JJ-F-JLJF7LJF---JF---7LJLJLJFJF7L-7||L7|F7LJF7||L-7F7||L7||FJL-7L7L7|L-7||||F---J|L7F-7|FJL-JL-----7|FJLJ.|L--7FJF-JF---7-F-7FLJ7
|-7-7-7LL-J|-FL----JL--JF---JF-7L---7F-J7|L7FJ||FJLJL7FJLJL--J|LJ|FJ||L7F-JFJFJL7FJ||||L--7FJFJL7LJL-7F7F-----JLJF7F7L7F-J|FJF7|F--JF--77JJ7
LJL--.JFJ.7-7LLF--------JF--7L7L---7LJ7F7L7|L7|||F7F7||FF7F7F7L-7||FJ|FJL-7|FJF-JL7||LJF--JL7|F7L-7F-J||L-7F--7F-JLJL7|L--JL-JLJL7LFLJ.|LJ-|
L7.|J7JFJFJJ|7FL------7F-JF7L-JF7F7|F-7|L7|L7|||||||||L7||||||F7|LJL7|L7F7|LJFJLF7||L-7|F--7||||F7|L7FJ|F-J|F-J|F7F7FJL7F---7F7F7L77F--|FLF7
|L7|-7.LL|.LF.FF------J|F-J|F7FJLJLJL7||FJ|FJ|||||||||FJ||||||||L-7FJ|FJ||L-7|F7||||F7|||F-J||||||L7|L7|L--JL--J|||LJF7|L-7F||LJL7L7FJ|LFLF|
-7L-7.|7.|7-J--L7F7F7F7|L-7LJ|L--7F7FJLJL7||FJ||||||||L7|LJ|||||F7|L7|L7||F-J|||||||||||||F7|||||L7|L7|L7F--7F7FJ|L--J|L7FJFJL-7FJFJ-|-.JL||
LL7L7.L|F||FJFLLLJLJLJLJF7L-7|F--J|||F--7||LJFJ|||||LJFJL-7|||||||L7LJFJ|||F-J|||||||LJ||||||LJ||||L7||FJL-7||||||F---JF|L7L7F7||FJJF|-F.FL7
.LFJL..LJJ-7JF-|J|F-----JL7F||L--7|||L-7LJL7|L7|||LJF-JF7FJ||||||L7L7LL7|||L7FJLJ||||F-J|LJ||F-J|FJFJLJ|F7FJLJSL7|L----7|FJ|LJ|||L7F7|7LFJJ.
7L-7LLJFJJJJ.|.FF-JF-7F7F7L-JL---J||L7FL7F7|F-J||L-7L-7||L7LJ|||L7L7L7F|||L7||F7.LJLJL--JF-J|L-7|L7L7F-J|LJF-7L7|L--7F-JLJ-F7FLJL-J-LF||.|77
F7L77J.F-L77FF-FL--J7LJLJ|F7F-7F7FJ|FJF-J||||F7||F-J|FJ|L7L-7||L7|.L7L7|||FJ|LJL--7FF7JF7L7FJF-JL7|FJL-7L--JFJ||L-7FJL----7||F7|F7-|L|.L-F7-
L|.|7..L----LJ7FF--------J||L7|||L7|L7L7FJLJ|||||L7F-JFJ.|F-J||FJL7FJFJ||||FJF-7F7|FJL-JL-JL7|F7FJ||F--JF7F7L-7L7FJL7F---7LJLJL7|L777-F|LJ..
-J||FJ-F7..FLJLFJF-7F-7F7FJL7|||L7|L7|FJ|.F-J||||FJL--JF-JL-7LJ|F-JL7L7LJ||L7|7||||L7F-7F-7FJ||||JLJ|F7FJ|||F7L7LJFF|||F7|F7F-7LJFJJLFLJ.|-7
F7|F.F7L7F-7J||L-JFJL7LJ||F-J|LJFJ|7||L7|FJF7|||||F-7F-JF7F-JFFJL--7L7L-7LJJ|L7|||L7|L7||||L7LJ|L--7LJ|L7LJLJL7L--7FJL-J|LJLJFJF7L77-L--7JFJ
L-7J-LJJ.L7L7F77|LL--J7FJ||F7L-7|FJFJL7|||FJ||||LJL7LJF7||L--7|F7F7|-L7FJ|F-JFJLJ|FJ|FJ||FJFJF-JF7FJF7L7|JF7|LL7F-JL7F-7L--7.L7|L-J7.L-7JF7|
.LJ7.L|-F-|-LJF|77F----JFJLJ|F-JLJFJF7|LJ||FJ||L7F7L7FJ||L--7|||||||F-JL-7L-7L-7FJ|FJ|FJ||FJ.L7FJ||FJL-JL-JL7FFJL7F7LJ.L7F7L-7|L---7-|-7JLJ7
F|-|7F|F.7J..|F-|FL-----JJF-JL--7|L7||L7FJ|L7|L7||L-JL7|L--7LJ||LJLJL-7F-JF-JF-JL7|L7|L7|||F-7|L7||L-7F7F7F7L7L-7LJL---7LJ|F7|L-7F7|-LJ.|FLJ
F|LF--JJFJ7|-J.|LF--------JF7F7FJF-J||FJ|FJFJ|FJ|L7F-7||F7FJ|FJL-7F---JL7JL-7L--7||FJ|FJ||LJFJL7|LJF-J|||||L7L-7|F7F---J7FJ|LJLLLJ||LJF|L-JF
7JFJJJF7L7-JF|FFJL------7F7|||||.L--J|||LJ|L7|L7||||FJ||||L-7L7F-JL-7F-7|F--JF--J|||FJ|FJL7FJ|.|L-7L-7||||L7|F-JLJLJF77FFL7L-7F|JL||FJ7L7-LF
|FFLJFL77|.FJ.|JFJJF7F7FJ|||||||F----JL7F---J|FJ|FJ|L7||||F7|L|L---7||FJ|L--7L-7FJ||L7||F-JL-7FJF7|F-J|LJL-J||F7F7FFJL7-F.L7FJJ-7FLJJJFJ..LJ
FJJ.|LJ..|J77F7||.F|LJLJFJLJ||LJL--7F7FJ|F7F7|L7|L7|JLJ||||||FJF7F-J|||FJF7FJF7|L7||FJ||L-7F7|L7|LJL-7||F---JLJLJL7|F7L---7|L7|J7-LJLFJJ-F-L
F-7F-|7FF77|7J|F-7-L7F-7||F-JL---7FJ||||||||||FJ|FJL--7||||||L7||L-7||LJ7|LJFJ|L7|||L7||F-J||L7LJF---JL7L7F7F7F--7LJ||F7F-J|FJ7LF77JL-|L7JL|
F-J|7J7-FLFJF.FL7L--J|FJL7L7F-7F7|L7||L7LJLJLJL7||F-7FJLJ||||FJ||F-J||F--JF7L7L7||||FJLJL7FJL7L-7L7F-7FJFJ||||L7FJF7|LJLJ.LLJJL-FJ|.F||F||F-
|J7L|L|F|||-7-|FJF--7|L-7L7|L7||||FJ|L7L7F7J.|JLJLJFJL--7||||L7||L-7|||F--JL7L7||||||F-7FJL7FJF7|L||FJL7|FJ|||FJL7||L--7J.|J7FJF7.LFJF7FF-7J
.L7FJ.LJ|F|.|7LL7|-L||LFJFJL7|||LJ|FJJL7LJ|7F.||F7FJF7F-JLJ||FJ|L7FJLJLJF---JFJLJ|||LJFJ|F7|L7||L7LJ|F7|LJFJ|||7.||L7F-J.7LFL7FFJ.F.J||-JLJ7
7-7J|FJ.LLJFL7L||L7-LJFJFJ..|||L7J||FL|L7FJ-|FF-JLJFJ|L---7||L-JFJL-7F--JF7F7L--7||L7FJFJ||L7|||FJ-FJ|||F-JFJ|L7FJL7LJ|..L-L.77JFJ.L|JL|...|
7JJ-77J-|.|F-7.-L-JF--JFJFFFLJ|FJ-LJ7.F7|L7FFFL--7FJ||F7F7|LJ7F7L7F7|L---JLJ|F--JLJJLJFL-J|FJLJ||F-JFJLJL-7L7|FJL7FJ|7L-|LL|7L7-J.|FJJ.L|.77
|L--7-J7|.LF-JFJJ|-|F-7L7-|LJ.LJ|L|L7F|-|FJ-LF---JL-7||||LJ|F-JL-J|LJF------JL-7F7-F7.F-7FJL-7FJ|L-7L-7F--JFJ|L-7LJJ777|F.F-7-L7--F-JLJJ.7JJ
7.FL.F-L..F-JLFJJLFJL7|FJJ.F-FL7JF77|F|J||7.LL---7F7||||L7-FL-7F-7L-7L-7F7F-7F7LJL-JL-JFJL7F7|L7|F-JF7|L--7L7L-7L-77JF-7..JF7..77.FJ-7.F-L-F
L77L|-7LJ-|J7.|-F-|F-JLJ77F|-7LJ|L|L-.J.LJ-JJLF--J||||||FJLF--JL7L7FJLFJ|||FJ||F7F7F7F7L-7||LJF|||F7|LJF--JFJFFJF7L7||FFL-J7.7-LL7J.7LJ.L.|.
|.|||L7JJFJLJ-F7LJ||J|J-L-J|-|LLFJF7|L-FJ|-L--L--7||||||L77L--7FJFJL77L-J||L7|LJ||||||L7FJ|L-7FJ||||L7|L-7FJF7L7|L7L-7-JJ.||F||J.|F7L7-FL-L7
FFF|7-JL7J-7J7.7JLLJF|.-..LJ-L-LJ7|F-JLLF-7LF7LL|LJ||||L7|JJL|LJ7L7FJF---JL7||F-J||||L7||FJF-J|FJ||L7L-7FJL-JL7LJFJF-J.F-FLJ----7-7JJL-JF|F7
FL---7|..L-J7F----JLFJ7.|FF7JLJLLF-|J.--J.7F-7JF-7LLJLJ7LJJ7|FJLF-JL7L-7F-7||||F7|LJ|FJ||L7|F-JL7LJ-L7FJL7F--7L7JL-J.|7J-FJ.FJ|FJFJJ.||F-J-F
|.J|L777|JJ.77F|-L7FJF|7JL-J7LF.L|L7-7|F|.LLJ|-J|7.L||.L|JJF|J7L|F--J.LLJFJ|||LJ|L7JLJLLJ|LJL---JLFJ-|L7FJ|F7L-JJ.L.LL7--J|-L-F-7-J-FF|F|.LJ
L..7L-77F-J-||L|7LJJ.F-J..L7L77F-F7|L|7FL7FFF|.L----|JF|LJ.L--7-LJJL-77||L7|LJF7L7L--7||L|J..L-|JL7..L-JL7LJ|7F|F7J-7F--J7J7|JFJL-..FL.|J..|
LL-7-LL--7LFJ7.L7||.FL-LJ--FLJF|J|F|LLJ7-F77LLJFL-L7||F77|FJF|-.L|.J.F7FF.||LFJL-JF7FJJ7-L-J7.F-JFJ.L-J-L|F-J--7J.J-FJ.--7.----7F|7F7|FL7.F-
.F||..LFJ--JJ|J-JJ-J7L7|JLF|LFL|7|7J.|7.FFFJ.|-J77--|JJLJ.L-J|-F-|7LFJ--J.LJFL-7F7|||.F||L-FF-|.F7-F-JLLFJ|L|7F|7-LF---77.F||.LFL--|LJJLL-JJ
FFFL77.J-L777|J.||-LJJFF-FFJF|LLFF|-|7-J-.F--J7-L--FJ7|.L7L7-7.|F|..LJ-J|.L.F||||||LJ-J7JJLL||F-||F|-L.FL7L-7-|--.FJ|FL|7FFL--.LLLLL7F|.LLJ|
FFLJLL7||J|-F|F-||JFJF|J.--7FJ.FJJ.L.||J|FJ||F7.J.FF7FFJF-J|J.F-F7.|.L7JLF-7F7-LJLJF|JLJ|-F-7-L7|-F--JF7-|F-JJ|7-FLJFJJLL-|-L-|J|LF--FJ7L..L
F7J-LJ-LJ7|.-LJ7.|.7LL7.||L|-7--J7L-F-7.J7L77-L7F7JL|-J.LJF7L7L-JL7|7F77-77||.|||-J7..F7---.J|.L..-JJLLJ-LJFF7JL-7J-F|-||.JJ.FJ7--.7.|J|JFJJ
L7J.LJ.LLF7-LJ-FLJ7LJJL7-F.JJL.LLJJ.7.7-L-FJ-.|LJJLFFJ-JL-J|.L-L-.-L-|J..J7JJL-L--L-7--.L-LL----|-L|J.|.-J.|-JLL-7JJLLLJ7.LJJJ-|7-LL-|-F-7J7`;

const pipes = {
  "|": ["n", "s"],
  "-": ["e", "w"],
  L: ["n", "e"],
  J: ["n", "w"],
  "7": ["s", "w"],
  F: ["s", "e"],
};

const opposite = {
  n: "s",
  s: "n",
  e: "w",
  w: "e",
};

// OH! We're in two dimensional space. So I can represent these as indices where l = row length and i = index of the pipe!
// Look for a pipe north of pipe at index i means look at index i - row length.
// So this represents WHERE we're looking for the pipes. But there's also the issue of not all pipes being compatible...
const directionLookup = {
  n: "i - l",
  s: "i + l",
  e: "i + 1",
  w: "i - 1",
};

function pipesConnect(
  pipe1: {
    piece: keyof typeof pipes;
    position: number;
  },
  pipe2: {
    piece: keyof typeof pipes;
    position: number;
  },
  rowLength: number
) {
  const pipe1Directions = pipes[pipe1.piece];
  const pipe2Directions = pipes[pipe2.piece];

  // If I have | and J, I know these two can connect at |'s south point. That's what's being returned here.
  const possibleConnectionDirections = pipe1Directions.filter((direction) => {
    return pipe2Directions.some((dir) => dir === opposite[direction]);
  });

  if (!possibleConnectionDirections) return false;

  return possibleConnectionDirections.some((direction) => {
    const formula = directionLookup[direction]
      .replace("i", pipe1.position)
      .replace("l", rowLength);
    const necessaryIndex = eval(formula);
    return necessaryIndex === pipe2.position;
  });
  /* 
		| doesn't connect to -. But how do I know that?

		VALID
		|.
		L.

		INVALID
		L.
		|.

		What fundamental truth am I intuiting here?
		Each pipe has two ends. The ends have to match up. But how can I tell that?
		| has a north end and a south end. For it to line up to L, |'s south end has to touch L's north end. But how can I tell whether or not that's the case?
		Is it as simple as "south has to touch north and vice versa". Is that it? Like, I see a |. I have to look up and down.

		What's the difference between "this shape HAS a south" and "this shape HAS a south and it's below me". I guess just where we find it. If it's i + l, it's below you?
	*/
}

function determineSTrueIdentity(inputWithNewlines: string) {
  const rowLength = inputWithNewlines.split("\n")[1].length;
  const flatInput = inputWithNewlines.replace(/\n/g, "");
  const startingPoint = flatInput.indexOf("S");

  // There will be exactly two pipes that connect to S. Find them.
  const connectedDirections: string[] = [];
  for (const direction of ["n", "s", "e", "w"]) {
    const formula = directionLookup[direction]
      .replace("i", startingPoint)
      .replace("l", rowLength);
    const whereAPipeWillBeIfItConnects = eval(formula);
    const maybePipe = flatInput[whereAPipeWillBeIfItConnects] as
      | keyof typeof pipes
      | "."
      | undefined;
    const isPipe = Object.keys(pipes).some((pipe) => pipe === maybePipe);
    if (isPipe && maybePipe !== "." && maybePipe) {
      const definitelyPipe = maybePipe;
      // We can't use pipesConnect here because we don't know which pipe we're looking at. However, we do know whether or not it's possible for a pipe to connect given its connectors and position relative to S.
      // For example,
      // L .
      // S .
      // We know that L CANNOT connect to S here, because it is above S. In other words, L is north of us. For L to connect to S, it would have to be south of us.
      // Generalizing? If a shape is in direction dir, it connects to us if shape.some(relevantDirection => relevantDirection === opposite[dir])
      const pipeConnects = pipes[definitelyPipe].some((dir) => {
        return dir === opposite[direction];
      });
      if (pipeConnects) connectedDirections.push(direction);
    }
  }
  return Object.keys(pipes).filter((pipe) => {
    return pipes[pipe].every((dir) => connectedDirections.includes(dir));
  })[0];
}

function findLoopLength(inputWithNewlines: string) {
  const rowLength = inputWithNewlines.split("\n")[1].length;
  const trueInput = inputWithNewlines.replace(
    "S",
    determineSTrueIdentity(inputWithNewlines)
  );
  const trueInputWithoutNewlines = trueInput.replace(/\n/g, "");

  // Now, all we have to do is find every pipe that connects to exactly two other pipes!
  const loopItems: string[] = [];
  for (let i = 0; i < trueInputWithoutNewlines.length; i++) {
    const current = trueInputWithoutNewlines[i];
    const currentIsPipe = Object.keys(pipes).some((pipe) => pipe === current);
    if (!currentIsPipe) continue;
    let connections = 0;
    ["n", "s", "e", "w"].forEach((direction) => {
      const positionFormula = directionLookup[direction]
        .replace("i", i)
        .replace("l", rowLength);
      const indexOfPossibleConnection = eval(positionFormula);
      const possibleConnection =
        trueInputWithoutNewlines[indexOfPossibleConnection];
      if (!possibleConnection) return;
      const possibleConnectionIsPipe = Object.keys(pipes).some(
        (pipe) => pipe === possibleConnection
      );
      if (!possibleConnectionIsPipe) return;
      if (
        pipesConnect(
          { piece: current as keyof typeof pipes, position: i },
          {
            piece: possibleConnection as keyof typeof pipes,
            position: indexOfPossibleConnection,
          },
          rowLength
        )
      ) {
        console.log(
          `CONNECTED ${current} to ${possibleConnection}. Positions: ${i} and ${indexOfPossibleConnection}. This brings the total connections to ${
            connections + 1
          }`
        );
        connections++;
      }
    });
    if (connections === 2) {
      loopItems.push(current);
    }
  }
  return loopItems.length;
}

// WAIT. it's just loop.length / 2, right? If I can find the length of the loop, I'm done?
function walkPipes(input: string) {
  /*  
		You start on F. You can go directions[F]. This is only true for the starting node, maybe? Or at least, usefully so.
		You go s. You're at |. You CANNOT go opposite[s], which is n. You must go to whichever direction is left. In our case, it's s again
		You go s. You're at L. You cannot go opposite[s], which is n. You must go e. This repeats.
		I wonder if you can simultaneously do this. You're done when both paths return to 
	*/
}

// We know a pipe is a part of the main loop if it connects to two other pipes. Full stop.

console.log(findLoopLength(clutteredTestInput) / 2);
