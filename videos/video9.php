
    <div class="form-group">
        <label class="control-label" for="nombre">Nombre</label>
        <input type="text" class="form-control" name="nombre3" placeholder="Albert Einstein"  id="name3" >
    </div>
    <div class="form-group">
        <label class="control-label" for="radioEstudios">Edad</label>
        <div class="radio">
            <label>
                <input type="radio" name="radioEstudios" id="idRadioEstudios1" value="1" checked>
                No tiene estudios
            </label>
        </div>
        <div class="radio">
            <label>
                <input type="radio" name="radioEstudios" id="idRadioEstudios2" value="2">
                Tiene estudios primarios
            </label>
        </div>
        <div class="radio">
            <label>
                <input type="radio" name="radioEstudios" id="idRadioEstudios3" value="3">
                Tiene estudios secundarios
            </label>
        </div>
    </div>
    <input type="button" value="Enviar" class="btn btn-default" onclick="sendNameAndRadios()">
