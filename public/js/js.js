      $(document).ready(function() {
            var dataSet =  {lista: data};

            var columnDefs = [{
                  title: "Name","bSearchable": true, "aTargets": [ 0 ]
            }, {
                  title: "Position","bSearchable": true
            }, {
                  title: "Office","bSearchable": true
            }, {
                  title: "Extn.","bSearchable": true
            }, {
                  title: "Start date","bSearchable": true
            }, {
                  title: "Salary","bSearchable": true
            }];

            var myTable;

            myTable = $('#example').DataTable({
                  "sPaginationType": "full_numbers",
                  data: dataSet,
                  columns: columnDefs,

                        dom: 'Bfrtip',        // Needs button container
                        select: 'single',
                        responsive: true,
                        altEditor: true,     // Enable altEditor
                        buttons: [],
                        
                  });
            myTable.columns().every(function() {
                  var that = this;

                  $('input', this.footer()).on('keyup change', function() {
                        if (that.search() !== this.value) {
                              that.search(this.value).draw();
                        }
                  });
            });


      });
