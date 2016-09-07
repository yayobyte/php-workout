
    <div class="form-group">
        <label class="control-label" for="numero10_1">Numero 1</label>
        <input type="number" class="form-control" name="numero10_1" placeholder="32"  id="idSumNumber10_1" >
    </div>
    <div class="form-group">
        <label class="control-label" for="numero10_2">Numero 2</label>
        <input type="number" class="form-control" name="numero10_2" placeholder="2"  id="idSumNumber10_2" >
    </div>
    <div class="checkbox form-group">
        <label>
            <input type="checkbox" value="sumar" id="idSumar10">
            Sumar
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox" value="restar" id="idRestar10">
            Restar
        </label>
    </div>
    <input type="button" value="Enviar" class="btn btn-default" onclick="sumNumbersCheckBoxes()">
