import { Tabs, TabsContent } from "@/components/ui/tabs";
import React, { useState } from 'react';

import EditorPanelSettings from "@/components/editor/editorPanel/EditorPanelSettings";
import EditorArea from "@/components/editor/editorPanel/EditorArea";
import EditorTabs from "@/components/editor/editorPanel/EditorTabs";

export default function EditorPanel() {

    {/* Testing Editor Files */ }
    const [files, setFiles] = useState([
        {
            id: 324, title: "calculate.java", language: 'java', content: `public class Beverage {
    private String name;
    private int volume;
    private boolean isChilled;

    public Beverage(String name, int volume, boolean isChilled) {
        this.name = name;
        this.volume = volume;
        this.isChilled = isChilled;
    }
    public String getName() {
        return name;
    }
    public int getVolume() {
        return volume;
    }
    public boolean isChilled() {
        return isChilled;
    }
    public boolean isEmpty() {
        return (volume == 0 ? true : false);
    }
    @Override
    public String toString() {
        return this.getName() + this.getVolume() + "mL " + (this.isChilled() == true ? "is chilled" : "is not chilled");
    }
}

class Water extends Beverage{
    private String type;
    public Water(int volume, boolean isChilled, String type) {
        super("Water",volume,isChilled);
        this.type = type;
    }
    public Water(int volume, boolean isChilled) {
        super("Water",volume,isChilled);
        this.type = "Regular";
    }
    public String getType() {
        return type;
    }
    @Override
    public String toString() {
        return this.getName() + " " + this.getVolume() + "mL " + (this.isChilled() ? "is chilled" : "is not chilled") + " (" + this.getType() + ")";
    }
}

class Beer extends Beverage{
    private double alcoholicContent;
    public Beer(int volume, boolean isChilled, double alcoholicContent) {
        super("Beer",volume,isChilled);
        this.alcoholicContent = alcoholicContent;
    }
    public String getType() {
        if(alcoholicContent < 0.03) {
            return "Flavored";
        }else if(alcoholicContent > 0.03 && alcoholicContent < 0.06) {
            return "Regular";
        }else {
            return "Strong";
        }
    }
    @Override
    public String toString() {
        return super.toString() + " " + "(" + alcoholicContent + "%" + " alcoholic content)";
    }
}` },
        {
            id: 123, title: "main.java", language: 'java', content: `import java.util.Scanner;
import java.text.DecimalFormat;

public class Main{
    public static void main(String[] args){
        Beverage beer = new Beer(250,true,0.05);
        System.out.println(beer.toString());
        printPattern(5);
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a num: ");
        int x = scan.nextInt();
       
        System.out.println(((x - 3) % 4 == 0) ? "Yes" : "No");
        System.out.print("Enter product name: ");
        String name = scan.next();
        System.out.print("Enter quantity: ");
        int quan = scan.nextInt();
        System.out.print("Enter price: ");
        double price = scan.nextDouble();
        DecimalFormat deciForm = new DecimalFormat("#,##0.00");
        System.out.printf("Product: %s\n",name);
        System.out.println("Quantity: " + quan);
        System.out.println("Price: PHP " + deciForm.format(price));
        System.out.println("Total Cost: PHP " + deciForm.format(price * quan));
    }
    static void printPattern(int x){
        for(int i = x; i>=1; i--){
            for(int j = 1; j<=x-i; j++){
               System.out.print(" ");
            }
            for(int k = 1; k<=2*i-1; k++){
               System.out.print("*");
            }
            System.out.println();
        }
    }
}` },
        {
            id: 434, title: "text.cpp", language: 'java', content: `#include "list.h"
#include <iostream>
#include "node.h"
using namespace std;

class CircularLL : public List {
	node* tail = NULL;
	int size = 0;

    node * createNode(int num) {
        node * n = new node;
        n->elem = num;
        return n;
    }

public:
	void add(int num) {
		addFirst(num);
	}

	void addFirst(int num) {
	    node *n = createNode(num);
	
        if (!tail) {
            tail = n;
            n->next = tail;
        } else {
            n->next = tail->next;
            tail->next = n;
        }
        
        size++;
	}

	void addLast(int num) {
	    node *n = createNode(num);
	
        if (!tail) {
            tail = n;
            n->next = tail;
        } else {
            n->next = tail->next;
            tail->next = n;
            tail = n;
        }
        
        size++;
	}

	int get(int pos) {
		// IGNORE
		return 0;
	}

	int getTail() {
        if (tail) {
            return tail->elem;
        }
        return -1;
	}

	void rotate() {
        if (tail) {
            tail = tail->next;
        }
	}

    int remove(int num) {
        return 0;
    }

	int removeFirst() {
	    if (!size) return -1;
	
		node *n = tail->next;
		int ret = n->elem;
		if (n == tail) {
		    tail = NULL;
		} else {
		    tail->next = n->next;
		}
		delete n;
		size--;
		return ret;
	}

	void print() {
		cout << "Size: " << size << endl;
        if (!size) {
            cout << "Empty" << endl;
            return;
        }
        
        cout << tail->next->elem;
        node * cur = tail->next->next;
        
        while (cur != tail->next) {
            cout << "->" << cur->elem;
            cur = cur->next;
        }
        
        cout << "->" << tail->next->elem << endl;
	}
};` },
    ]);

    const [editorTheme, setEditorTheme] = useState('vs-dark');
    const [language, setLanguage] = useState();
    const [activeFile, setActiveFile] = useState(files[0].id);

    return (
        <section className="flex flex-col h-full">
            <div className="flex items-center justify-between h-12">
                {/* Editor Tabs */}
                <EditorTabs files={files} setFiles={setFiles} activeFile={activeFile} setActiveFile={setActiveFile} />
                <div className="flex items-center h-full">
                    {/* Editor Settings */}
                    <EditorPanelSettings setEditorTheme={setEditorTheme} setLanguage={setLanguage} />
                </div>
            </div>
            <Tabs value={activeFile}>
                {files.map((file) => (
                    <TabsContent key={file.id} value={file.id}>
                        {/* Editor */}
                        <EditorArea file={file} language={language} editorTheme={editorTheme} />

                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );

}