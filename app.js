const update = () => {
  const res = document.getElementById('result').contentWindow.document;
  res.open();
  res.write(editor.getValue());
  res.close()
}

const setEditor = () => {
  editor = ace.edit('editor');
  editor.setTheme('ace/theme/monokai');
  editor.getSession().setMode('ace/mode/html');
  editor.getSession().on('change', () => {
    update();
  })
}

setEditor();
update();