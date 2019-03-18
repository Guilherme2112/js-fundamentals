const gulp = require('gulp')
/*
 gulp é um automatizador de tarefas em projetos. ajudando a realizar de forma
 simples tarefas como munificar/transpilar arquivos, rodar servidores, etc.
*/

// o default refere-se a tarefa padão do gulp. sem ela não é possível startar a sua pipeline
gulp.task('default', () => {
  gulp.start('copiar', 'fim') // chamada de tasks.  É preciso criar as tasks para executá-las (ué)
})


gulp.task('copiar', ['antes1', 'antes2'],() => { // tasks dentro do array são dependências da task sendo criada. serão executadas antes
  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  //.pipe(tranformacao1())
  //.pipe(tranformacao2())
    .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', ()=> {console.log('antes1!');})
gulp.task('antes2', ()=> {console.log('antes2!');})
gulp.task('fim', ['fim1', 'fim2'])
gulp.task('fim1', () => { console.log('Fim1')})
gulp.task('fim2', () => { console.log('Fim2')})
