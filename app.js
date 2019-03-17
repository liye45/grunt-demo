#!/usr/bin/node

const transform = require('./entropy.js').transform,
            h = require('./entropy.js').h,
                  sigma = require('./entropy.js').sigma,
                        validate = require('./entropy.js').validate,
                              roundFractional = require('./entropy.js').roundFractional;

var p = [], i = 0;

const log = console.log,
            stdin = process.stdin,
                  exit = process.exit,
                        arg  = process.argv,
                              help = ''
                                      + '用法：./entropy.js [-h | --help] [probability]\n'
                                              + '\n'
                                                      + '无命令行参数时，程序进入交互输入模式，提示用户输入信源符号的概率分布。\n'
                                                              + '用户按 Ctrl+D 结束输入，程序打印信源符号概率分布，并计算打印该信源熵。\n'
                                                                      + '\n'
                                                                              + '熵的计算公式：\n'
                                                                                      + '  H(X) = -p1*log(p1, 2) - p2*log(p2, 2) - ... - pn*log(pn, 2)\n'
                                                                                              + '  其中： 0 <= pi <= 1 并且 p1 + p2 + ... + pn = 1\n'
                                                                                                      + '\n'
                                                                                                              + '命令行参数:\n'
                                                                                                                      + '  -h, --help              打印此帮助信息\n'
                                                                                                                              + '  probability             信源符号的概率分布，支持以下两种格式：\n'
                                                                                                                                      + '                          1) 逗号分隔，例如：0.1,0.9\n'
                                                                                                                                              + '                          2) 空格分隔，例如：0.1 0.9';

                                                                                                                                              if(arg.length == 3 && (arg[2] === '-h' || arg[2] === '--help')) {
                                                                                                                                                  log(help);
                                                                                                                                                    exit();

                                                                                                                                              }

if(arg.length > 2) {
    var msg = transform(arg);

    if(msg.isOK) {
          log('\np = %j\n', msg.p);
              log(`h(p) = ${roundFractional(h(msg.p), 3)} bit`);
                  exit();
                    
    } else {
          log(msg.reason);
              exit();
                
    }

} 

p = [];

log('请输入信源概率分布：(Ctrl+D 退出输入)\np%d:', i);

stdin.on('data', (data) => {
    var msg = validate(data);
    if(msg.isOK) {
          p.push(Number(data));
              log('p%d:', ++i);
                
    } else {
          log(msg.reason);
            
    }

});

stdin.on('end', () => {
  if(p.length === 0) {
        exit();
          
  }

    log('\np = %j\n', p);
    if(sigma(p) === 1) {
          log(`h(p) = ${roundFractional(h(p), 3)} bit`);
            
    } else {
          log('概率空间不封闭！无效的信源概率分布！');
            
    }

});
