var oShell = new
        ActiveXObject("Shell.Application");
        var commandtoRun = "C:\Windows\System32\calc.exe ";
        oShell.ShellExecute(commandtoRun, "_blank", "", "open", "1");